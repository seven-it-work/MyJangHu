import modManager from "@/mod/index.js";
import {randomList, randomUtil} from "@/random.js";
import {getName} from "random_chinese_fantasy_names";

const modDb = Object.values(modManager).flatMap(mod => mod.db.people)

export const randomPeopleObj = () => {
    const data = {
        "id": randomUtil.guid(),
        "xing": "",
        "ming": "",
        "sex": randomList.randomFormList(["WOMAN", "MAN"]),
        "description": "",
        "remark": "",
        "currentSceneId": "774e54a1c93049648038517c8094cb71",
        "currentWorldId": "c66c5a3267e7485592506cebb52cfca1",
        "currentCityId": "37817475185b4defb405e629c35a4898",
        "interactionIdList": "",
        "peopleType": "AI_PEOPLE",
        birthDay: 893238634695,
    }
    const name = getName(1, {
        isFemale: data.sex === 'WOMAN'
    })[0]
    data.xing = name.substring(0, 1)
    data.ming = name.substring(1)
    return data;
}
const randomDb = []
for (let i = 0; i < 100; i++) {
    randomDb.push(randomPeopleObj())
}

const peopleDb = [
    ...randomDb,
    ...modDb, {
        "id": "123",
        "xing": "李",
        "ming": "大力",
        "name": "李大力",
        "sex": "WOMAN",
        "description": "",
        "remark": "",
        "currentSceneId": "774e54a1c93049648038517c8094cb71",
        "currentWorldId": "c66c5a3267e7485592506cebb52cfca1",
        "currentCityId": "37817475185b4defb405e629c35a4898",
        "interactionIdList": [],
        "peopleType": "PLAYER",
        "createTime": 1710000000000,
        "updateTime": 1710000000000,
        birthDay: 893238634695,
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
        "updateTime": 1710000000000,
        birthDay: 793238634695,
    }]

console.log(peopleDb)
export default peopleDb
