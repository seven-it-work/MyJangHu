import {dynamicImport} from "@/util/Utils.js";

const worldDb = []
await dynamicImport("../../dungeon/ldj/db/worldDb").then(module => {
    console.log(module)
    console.log(1111111)
    worldDb.push(...module.defalut)
}).catch(e=>{})
export default worldDb
