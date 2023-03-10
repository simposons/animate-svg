'use strict';
class AnimateSvg {
    constructor(key,options={}) {
        this.key=key
        this.svgDocument=document.querySelector(this.key)
        this.options={
            file:'',
            animation:'',
            duration: 200,
            ...options
        }
        this.init(this.svgDocument,this.options)
    }
    init(_document,_options){
        if(!_document){
            console.error('')
            return
        }
        if(!_options){
            console.error('')
            return
        }

    }
}

export default AnimateSvg