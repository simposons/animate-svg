interface Option {
    readonly file: string;
    readonly animation: string;
    readonly duration: string | number;
}
export default class AnimateSvg {
    protected key: string;
    protected options: Option;
    protected svgDocument: HTMLDivElement | null;
    constructor(key: string, options: object);
    protected init(): void;
}
export {};
