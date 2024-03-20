import {dynamicImport} from "@/util/Utils.js";

const modList = [
    {
        name: 'core',
        showName: 'core',
        jsUrl: '../dungeon/core/src/index',
        cssUrl: '../dungeon/core/src/style.css',
    },
    {
        name: 'ldj',
        showName: '鹿鼎记',
        jsUrl: '../dungeon/ldj/src/index',
        cssUrl: '../dungeon/ldj/src/style.css',
    }
]

const modManager = {}

for (let i = 0; i < modList.length; i++) {
    const mod=modList[i]
    console.log(`加载mod:${mod.name}`)
    await dynamicImport(mod.jsUrl).then(module => {
        modManager[mod.name] = module.default
        console.log(`加载mod:${mod.name}成功`)
    }).catch(e => {
        console.warn(`加载mod:${mod.name}错误`, e)
    })
}

export default modManager;
