interface Option {
    readonly file: string;
    readonly animation: string;
    readonly duration: string | number;
}
interface pathType {
    readonly element: SVGPathElement;
    readonly length: string;
}
/**
 *
 *
 * @export
 * @class AnimateSvg
 */
declare class AnimateSvg {
    protected key: string;
    protected svgKey: string;
    protected options: Option;
    protected divElement: Element | null | undefined;
    protected svgElement: SVGElement | null | undefined;
    protected elementList: NodeListOf<SVGPathElement> | null | undefined;
    protected elementLengthList: pathType[];
    constructor(key: string, options: object);
    /**
       *初始化方法
       * @protected
       * @return {*}  {Promise<void>}
       * @memberof AnimateSvg
       */
    protected init(): Promise<void>;
    /**
       *初始化 element节点 加载svg
       * @protected
       * @return {*}  {Promise<void>}
       * @memberof AnimateSvg
       */
    protected initSvg(): Promise<void>;
    /**
       *  获取svg中path节点和path长度
       * @protected
       * @return {*}  {Promise<void>}
       * @memberof AnimateSvg
       */
    protected getPath(): Promise<void>;
    /**
       * 设置path动画
       * @protected
       * @memberof AnimateSvg
       */
    protected setAnimate(): Promise<void>;
    /**
       *外放方法 获取path对象及长度
       * @return {*}  {Array<pathType>}
       * @memberof AnimateSvg
       */
    getelementList(): pathType[];
}

export { AnimateSvg as default };
