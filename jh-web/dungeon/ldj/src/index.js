import MyMode from './TemplateMod.vue';
import worldDb from "./db/worldDb.js";


const modCore = {
    db: {
        world: worldDb,
        city: [],
        people: [],
    },
}

export default modCore
