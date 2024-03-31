import modManager from "@/mod/index.js";

const modDb=Object.values(modManager).flatMap(mod=>mod.db.people)
const peopleDb = [
    ...modDb,{
    "id": "123",
    "xing": "李",
    "ming": "大力",
    "name": "李大力",
    "sex": "WOMAN",
    "description": "",
    "remark": "",
    "currentSceneId": "",
    "currentWorldId": "c66c5a3267e7485592506cebb52cfca1",
    "currentCityId": "37817475185b4defb405e629c35a4898",
    "interactionIdList": [],
    "peopleType": "AI_PEOPLE",
    "createTime": 1710000000000,
    "updateTime": 1710000000000
},
    {
        "id": "333",
        "xing": "王",
        "ming": "老五",
        "name": "王老五",
        "sex": "MAN",
        "description": "",
        "remark": "",
        "currentSceneId": "774e54a1c93049648038517c8094cb71",
        "currentWorldId": "c66c5a3267e7485592506cebb52cfca1",
        "currentCityId": "37817475185b4defb405e629c35a4898",
        "interactionIdList": [],
        "peopleType": "AI_PEOPLE",
        "createTime": 1710000000000,
        "updateTime": 1710000000000
    }]


export default peopleDb
