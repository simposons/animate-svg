interface Option {
  readonly file: string
  readonly animation: string
  readonly duration: string | number
}
interface pathType {
  readonly element: SVGPathElement
  readonly length: string
}
// type elementType = 'line' | 'ellipse' | 'circle' | 'polygon' | 'polyline' | 'rect'
const elementTypeList: string[] = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect']
/**
 *
 *
 * @export
 * @class AnimateSvg
 */
export default class AnimateSvg {
  protected key: string = ''
  protected svgKey: string = ''
  protected options: Option = {
    file: '',
    animation: '',
    duration: 200
  }

  protected divElement: Element | null | undefined = null
  protected svgElement: SVGElement | null | undefined = null
  protected elementList: NodeListOf<SVGPathElement> | null | undefined = null
  protected elementLengthList: pathType[] = []

  public constructor (key: string, options: object) {
    this.key = key
    this.svgKey = `${key.slice(1)}-svg`
    this.options = {
      ...this.options,
      ...options
    }
    if (this.key === '') {
      console.error('无法获取key,请传入')
      return
    }
    void this.init()
  }

  /**
     *初始化方法
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof AnimateSvg
     */
  protected async init (): Promise<void> {
    await this.initSvg()
    await this.getPath()
    await this.setAnimate()
  }

  /**
     *初始化 element节点 加载svg
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof AnimateSvg
     */
  protected async initSvg (): Promise<void> {
    await new Promise((resolve, reject) => {
      this.divElement = document.querySelector(this.key)
      if (this.divElement == null) {
        console.error('请传入正确的key，以获取正确的document')
        return
      }
      const Req = new window.XMLHttpRequest()
      Req.addEventListener('load', (e: any) => {
        const element = this.divElement as HTMLElement
        element.innerHTML = e.currentTarget.responseText
        this.svgElement = element.querySelector('svg') as SVGElement
        this.svgElement.setAttribute('id', this.svgKey)
        resolve(0)
      })
      Req.open('GET', this.options.file)
      Req.send()
    })
  }

  /**
     *  获取svg中path节点和path长度
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof AnimateSvg
     */
  protected async getPath (): Promise<void> {
    await new Promise((resolve, reject) => {
      this.elementList = this.svgElement?.querySelectorAll('path')
      const elementList = Array.from(this.elementList as NodeListOf<SVGPathElement>)
      console.log({ elementList })
      elementList.forEach(item => {
        item.setAttribute('data-length', item.getTotalLength().toString())
        const obj: pathType = {
          length: item.getTotalLength().toString(),
          element: item
        }
        this.elementLengthList.push(obj)
        resolve(0)
      })
    })
  }

  /**
     * 设置path动画
     * @protected
     * @memberof AnimateSvg
     */
  protected async setAnimate (): Promise<void> {
    const keyframes = '@keyframes offset {to { stroke-dashoffset: 0;}}'
    // 创建style标签
    const style: HTMLStyleElement = document.createElement('style')
    // 将 keyframes样式写入style内
    style.innerHTML = keyframes
    // 将style样式存放到box标签
    document.getElementsByTagName('head')[0].appendChild(style)

    await new Promise((resolve, reject) => {
      this.elementLengthList.forEach(item => {
        const { element, length } = item
        console.log({ element }, { length })
        element.style.strokeDasharray = length + ' ' + length
        element.style.strokeDashoffset = length
        element.style.animation = 'offset 1.5s linear 1 forwards'
      })
    })
  }

  /**
     *外放方法 获取path对象及长度
     * @return {*}  {Array<pathType>}
     * @memberof AnimateSvg
     */
  public getelementList (): pathType[] {
    console.log('elementLengthList', this.elementLengthList)
    return this.elementLengthList
  }
}
