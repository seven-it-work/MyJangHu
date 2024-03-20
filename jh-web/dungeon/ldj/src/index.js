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
                LDJ_CHAT_DEMO: {
                    key: 'LDJ_CHAT_DEMO',
                    name: '鹿鼎记对话框',
                    component: ChatForm,
                }
            }
        ,
    }
}
export default modCore;
