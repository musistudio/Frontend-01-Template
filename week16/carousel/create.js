import { enableGesture } from './gesture';

export function create(Cls, attr, ...children){    
    let o;

    if(typeof Cls === "string") {
        o = new Wrapper(Cls);
    } else {
        o = new Cls({
            timer: {}
        });
    }

    for(let name in attr) {
        o.setAttribute(name, attr[name]);
    }

    let visit = children => {
        for(let child of children) {
            if(typeof child === "object" && child instanceof Array) {
                visit(child);
                continue;
            }
            if(typeof child === "string")
                child = new Text(child);
            o.appendChild(child);
        }
    }

    visit(children);
    

    return o;
}

export class Text {
    constructor(text){
        this.children = [];
        this.root = document.createTextNode(text);
    }
    mountTo(parent){
        parent.appendChild(this.root);
    }
}

export class Wrapper{
    constructor(type){
        this.children = [];
        this.root = document.createElement(type);
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value);

        if (name.match(/^on([\s\S]+)$/)) {
            let eventName = RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase());
            this.addEventListener(eventName, value)
        }

        if (name === 'enableGesture') {
            enableGesture(this.root);
        }
    }

    appendChild(child){
        this.children.push(child);
    }

    addEventListener() {
        this.root.addEventListener(...arguments)
    }

    get style() {
        return this.root.style;
    }

    mountTo(parent){
        parent.appendChild(this.root);

        for(let child of this.children){
            if (typeof child === 'string') {
                child = new Text(child);
            }
            child.mountTo(this.root);
        }
    }

}