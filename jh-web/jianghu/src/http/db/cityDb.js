import modManager from "@/mod/index.js";

const modDb=Object.values(modManager).flatMap(mod=>mod.db.city)

const cityDb = [...modDb,{
    "id": "d974949c5d8647d29b67e29833c3bc9e",
    "worldId": "c66c5a3267e7485592506cebb52cfca1",
    "name": "广泊",
    "description": "",
    "matrixMap": [["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""]],
    "enterSceneId": "",
    "createTime": 1709654400000,
    "updateTime": 1709740800000
}, {
    "id": "0098fc4997654877910cc07b5b443c1b",
    "worldId": "c66c5a3267e7485592506cebb52cfca1",
    "name": "潮北渚",
    "description": "",
    "matrixMap": [["", "", ""], ["", "", ""], ["", "", ""]],
    "enterSceneId": "",
    "createTime": 1709654400000,
    "updateTime": 1709740800000
}, {
    "id": "fc83d3d04ac14411acbd1893430d9199",
    "worldId": "c66c5a3267e7485592506cebb52cfca1",
    "name": "岷西津",
    "description": "",
    "matrixMap": [["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""]],
    "enterSceneId": "",
    "createTime": 1709654400000,
    "updateTime": 1709740800000
}, {
    "id": "d2f102b2f2c747aebe67a767d5709cdb",
    "worldId": "c66c5a3267e7485592506cebb52cfca1",
    "name": "广岗",
    "description": "",
    "matrixMap": [["25daad4bebee4d2eafe579f072836d44", "", "1892594b50ed4773aa0521b981d3bffe", "", "", "", "", "", ""], ["", "e4852e78871a4a93aeebcda333513040", "", "", "", "", "", "", ""]],
    "enterSceneId": "e4852e78871a4a93aeebcda333513040",
    "createTime": 1709654400000,
    "updateTime": 1709740800000
}, {
    "id": "724fb5777926463ea1da76f6eb363782",
    "worldId": "c66c5a3267e7485592506cebb52cfca1",
    "name": "交观",
    "description": "",
    "matrixMap": [["", "07868f5338224b0bb0bce953b0d32509", ""], ["", "fd0ecaf1a70f41109b9a13b6c45c31e4", "84ea8d2f8710424f98879fe14a15e2dd"], ["", "21281e04fa1e4b1baa658398d879c291", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]],
    "enterSceneId": "07868f5338224b0bb0bce953b0d32509",
    "createTime": 1709654400000,
    "updateTime": 1709740800000
}, {
    "id": "2b49df45da8245758ab798e2c8f50ecb",
    "worldId": "c66c5a3267e7485592506cebb52cfca1",
    "name": "太阳岭",
    "description": "",
    "matrixMap": [["4b7553ce68d34978bf3c55d1f17ab7c3", "", "", "", ""], ["", "7f8378fbc9d64a35914ccbec1fb81724", "3685e62d482e46feb7b911f5f659dc24", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
    "enterSceneId": "3685e62d482e46feb7b911f5f659dc24",
    "createTime": 1709654400000,
    "updateTime": 1709740800000
}, {
    "id": "37817475185b4defb405e629c35a4898",
    "worldId": "c66c5a3267e7485592506cebb52cfca1",
    "name": "燕西县",
    "description": "",
    "matrixMap": [["774e54a1c93049648038517c8094cb71", "", "01b61ecf494f4a3da9ca620558231626", ""], ["", "92ee3b56fe5e46e1ad1360921438527e", "", ""], ["3546dcb2c1a6476f9ee1dbc098d1b315", "", "dd3779d20a974f9f919727db842a587a", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]],
    "enterSceneId": "92ee3b56fe5e46e1ad1360921438527e",
    "createTime": 1709654400000,
    "updateTime": 1709740800000
}]


export default cityDb
