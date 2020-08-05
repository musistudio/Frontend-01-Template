import { create,  Text, Wrapper } from './create';

import {Carousel} from './Carousel';
// import { Panel } from './Panel';
// import { TabPanel } from './Panel';
import { ListView } from './ListView';

// class Carousel {
//     constructor(config){
//         this.children = [];
//         this.attributes = new Map();
//         this.properties = new Map();
//     }

//     setAttribute(name, value) { 
//         this[name] = value
//     }

//     appendChild(child){
//         this.children.push(child);
//     }


//     render(){
//         let children = this.data.map(url => {
//             let element = <img src={url} />
//             element.addEventListener('dragstart', e => e.preventDefault());
//             return element;
//         });

//         let root = <div class="carousel">
//             { children }
//         </div>

//         let position = 0;

//         let nextPic = () => {
//             let nextPosition = (position + 1) % this.data.length;
//             let current = children[position];
//             let next = children[nextPosition];

//             // 关闭动画
//             current.style.transition = 'ease 0s';
//             next.style.transition = 'ease 0s';

//             current.style.transform = `translateX(${-100 * position}%)`
//             next.style.transform = `translateX(${100 - 100 * nextPosition}%)`

//             setTimeout(function() {
//                 // 使用css规则控制动画
//                 current.style.transition = '';
//                 next.style.transition = '';
                
//                 current.style.transform = `translateX(${-100 - 100 * position}%)`
//                 next.style.transform = `translateX(${-100 * nextPosition}%)`
//                 position = nextPosition;
//             }, 16)
//             setTimeout(nextPic, 3000);
//         }
//         setTimeout(nextPic, 3000);


//         root.addEventListener('mousedown', e => {
//             let { clientX } = e;
//             let lastPosition = (position - 1 + this.data.length) % this.data.length;
//             let nextPosition = (position + 1) % this.data.length;

//             let current = children[position];
//             let last = children[lastPosition];
//             let next = children[nextPosition];

//             current.style.transition = 'ease 0s';
//             last.style.transition = 'ease 0s';
//             next.style.transition = 'ease 0s';

//             current.style.transform = `translateX(${- 500 * position}px)`
//             last.style.transform = `translateX(${-500 - 500 * lastPosition}px)`
//             next.style.transform = `translateX(${500 - 500 * nextPosition}px)`


//             let move = e => {
//                 current.style.transform = `translateX(${e.clientX - clientX - 500 * position}px)`
//                 last.style.transform = `translateX(${e.clientX - clientX - 500 - 500 * lastPosition}px)`
//                 next.style.transform = `translateX(${e.clientX - clientX + 500 - 500 * nextPosition}px)`
//             };
//             let up = e => {
//                 let offset = 0;
//                 if(e.clientX - clientX > 250) {
//                     offset = 1;
//                 }else if(e.clientX - clientX < -250) {
//                     offset = -1;
//                 }

//                 current.style.transition = '';
//                 last.style.transition = '';
//                 next.style.transition = '';

//                 current.style.transform = `translateX(${offset * 500 - 500 * position}px)`
//                 last.style.transform = `translateX(${offset * 500 - 500 - 500 * lastPosition}px)`
//                 next.style.transform = `translateX(${offset * 500 + 500 - 500 * nextPosition}px)`

//                 position = (position - offset + this.data.length) % this.data.length;;

//                 document.removeEventListener('mousemove', move);
//                 document.removeEventListener('mouseup', up);
//             };
//             document.addEventListener('mousemove', move);
//             document.addEventListener('mouseup', up);
//         })


//         return root;
//     }

//     mountTo(parent){
//         this.render().mountTo(parent)
//     }
// }

// let component = <Carousel data={
//     [
//         "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
//         "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
//         "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
//         "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
//     ]
// }></Carousel>

// let panel = <TabPanel>
//     <span title="title1">This is content1</span>
//     <span title="title2">This is content2</span>
//     <span title="title3">This is content3</span>
//     <span title="title4">This is content4</span>
// </TabPanel>


let data = [
    {
        url: 'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
        title: '猫1'
    },
    {
        url: 'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
        title: '猫2'
    },
    {
        url: 'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
        title: '猫3'
    },
    {
        url: 'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',
        title: '猫4'
    }
]

let list = <ListView data={data}>
    {record => <figure>
            <img src={record.url} />
            <figcaption>{record.title}</figcaption>
        </figure>
    }
</ListView>

list.mountTo(document.body);


