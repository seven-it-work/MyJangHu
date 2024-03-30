import {people, scene} from "@/http/api.js";
import PeopleObj from "@/view/game/core/entity/PeopleObj.js";
import SystemTime from "@/view/game/core/entity/SystemTime.js";
import {SceneObj} from "@/view/game/core/entity/SceneObj.js";

const sceneObjMap = new Map()

scene.listALl().then(res => {
    console.log(res)
    res.forEach(data => {
        const obj = new SceneObj();
        Object.assign(obj, data)
        sceneObjMap.set(obj.id, data);
    })
})

const peopleObjMap = new Map()
people.listALl().then(res => {
    res.forEach(data => {
        const obj = new PeopleObj();
        Object.assign(obj, data)
        obj.currentSceneObj = sceneObjMap.get(obj.currentSceneId)
        peopleObjMap.set(obj.id, obj)
    })
})

const systemTime = new SystemTime();
let setIntervalData

function run() {
    stop()
    setIntervalData = setInterval(() => {
        systemTime.systemTime += 1000
        peopleObjMap.values().forEach(people => {
            people.aiBehavior()
            console.log(people)
        })
    }, 3000)
}

function stop() {
    if (setIntervalData) {
        clearInterval(setIntervalData)
    }
}

export default {run, stop}
