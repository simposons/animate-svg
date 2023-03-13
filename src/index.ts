interface Option {
    readonly file: string;
    readonly animation: string;
    readonly duration: string | number;
}
export default class AnimateSvg {
    protected key: string = ''
    protected options: Option = {
        file: '',
        animation: '',
        duration: 200,
    }
    protected svgDocument: HTMLDivElement | null = null
    public constructor(key: string, options: object) {
        this.key = key
        this.options = {
            ...this.options,
            ...options
        }
        if (!this.key) {
            console.error('无法获取key,请传入')
            return
        }
        this.init()
    }
    protected init(): void {
        this.svgDocument = document.querySelector(this.key)
        console.log('this.svgDocument',this.svgDocument)
    }
} 