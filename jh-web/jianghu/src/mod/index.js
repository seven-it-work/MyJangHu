import {dynamicImport} from "@/util/Utils.js";

const modList = [
    {
        name: 'core',
        showName: 'core',
        jsUrl: '../dungeon/core/core-mod.es.js',
        cssUrl: '',
    },
    {
        name: 'ldj',
        showName: '鹿鼎记',
        jsUrl: '../dungeon/ldj/ldj-mod.es.js',
        cssUrl: '',
    }
]

const modManager = {}

for (let i = 0; i < modList.length; i++) {
    const mod = modList[i]
    // console.log(`加载mod:${mod.name}`)
    try {
        await dynamicImport(mod.jsUrl).then(module => {
            modManager[mod.name] = module.default
            // console.log(`加载mod:${mod.name}成功`)
        }).catch(e => {
            console.warn(`加载mod:${mod.name}错误`, e)
        })
    } catch (e) {
    }
}

export default modManager;
