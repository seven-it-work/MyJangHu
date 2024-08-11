import * as htmlparser2 from "htmlparser2";
import {h} from "vue";

export const dynamicImport = (moduleName) => {
    return import(moduleName).catch(error => {
        // console.log(`加载错误，模块：${moduleName}`, error)
        throw error;
    });
}


/**
 * 将htmlstr 转换为vnode
 * @param htmlStr
 * @return {*}
 */
export function dom2vNode(htmlStr) {
    const dom = htmlparser2.parseDocument(htmlStr);
    function convertNode(node) {
        if (node.type === 'tag') {
            const children = node.children.map(convertNode);
            return h(node.name, node.attribs, children);
        } else if (node.type === 'text') {
            return node.data;
        } else {

            return h('span',{},node.children.map(item=>convertNode(item)));
        }
    }
    return convertNode(dom)
}
