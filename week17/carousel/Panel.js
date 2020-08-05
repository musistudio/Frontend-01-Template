import {create, Text, Wrapper} from './create';
import {Timeline, Animation} from './animation';
import {ease} from './cubicBezier';


export class Panel {
    constructor(config) {
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
    }

    setAttribute(name, value) {
        this[name] = value;
    }

    appendChild(child) {
        this.children.push(child);
    }

    render() {
        return <div class="panel">
            <h1>{this.title}</h1>
            <div>
                {this.children}
            </div>
        </div>
    }

    mountTo(parent){
        this.render().mountTo(parent)
    }
}


export class TabPanel {
    constructor(config) {
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
        this.state = Object.create(null);
    }

    setAttribute(name, value) {
        this[name] = value;
    }

    appendChild(child) {
        this.children.push(child);
    }

    select(i) {
        for(let view of this.childViews) {
            view.style.display = 'none';
        }
        this.childViews[i].style.display = "";
        for(let view of this.titleViews) {
            view.classList.remove('selected');
        }
        this.titleViews[i].classList.add('selected');
    }

    render() {
        this.childViews = this.children.map(child => <div style="width: 300px;min-height:300px">{child}</div>);
        this.titleViews = this.children.map((child, i) => <span onclick={() => this.select(i)}
            style="background: lightgreen;padding: 0 5px;">{child.getAttribute('title')}</span>);
        setTimeout(() => this.select(0), 16);
        return <div class="rab-panel" style="border:1px solid lightgreen;width:300px;">
            <h1 style="width: 300px;margin:0;font-size: 22px;display: flex;justify-content: space-around;border-bottom: 1px solid lightgreen;">{this.titleViews}</h1>
            <div>
                {this.childViews}
            </div>
        </div>
    }

    mountTo(parent){
        this.render().mountTo(parent)
    }
}
