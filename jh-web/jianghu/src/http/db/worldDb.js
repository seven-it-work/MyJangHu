import {dynamicImport} from "@/util/Utils.js";

const worldDb = [{
    "id": "c66c5a3267e7485592506cebb52cfca1",
    "matrixMap": [["724fb5777926463ea1da76f6eb363782", "37817475185b4defb405e629c35a4898", "", "", "", "", "", "", "", ""], ["", "", "d2f102b2f2c747aebe67a767d5709cdb", "", "", "", "", "", "", ""], ["", "0098fc4997654877910cc07b5b443c1b", "", "d974949c5d8647d29b67e29833c3bc9e", "", "", "", "", "", ""], ["", "2b49df45da8245758ab798e2c8f50ecb", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", "", ""]],
    "name": "孟门族",
    "description": "",
    "entryCityId": "2b49df45da8245758ab798e2c8f50ecb",
    "createTime": 1709654400000,
    "updateTime": 1710000000000,
    "cityVoList": [],
    "leftValue": 14,
    "topValue": 60,
    "showAble": false
}]

await dynamicImport("../../dungeon/ldj/db/worldDb").then(module => {
    console.log(module)
    console.log(1111111)
    worldDb.push(...module.defalut)
}).catch(e => {
})
export default worldDb
