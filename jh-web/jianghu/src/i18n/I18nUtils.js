import zh_cn from "./zh_cn.js";


export default {
    getI18n: (key) => {
        return zh_cn[key]
    }
}
