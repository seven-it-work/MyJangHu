import worldDb from "./db/worldDb.js";
import cityDb from "./db/cityDb.js";
import peopleDb from "./db/peopleDb.js";
import sceneDb from "./db/sceneDb.js";
import ChatForm from "./chat/ChatForm.vue";

const modCore = {
    db: {
        world: worldDb,
        city: cityDb,
        people: peopleDb,
        scene: sceneDb,
    },
    components: {
        chat:
            {
                CORE_CHAT_DEFAULT: {
                    key: 'CORE_CHAT_DEFAULT',
                    name: '默认对话表单',
                    component: ChatForm,
                }
            }
        ,
    }
}
export default modCore;
