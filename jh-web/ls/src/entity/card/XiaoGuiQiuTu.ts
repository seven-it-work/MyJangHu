import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";
import XiaoGui from "./XiaoGui";
import BaseCardObj from "../../objs/BaseCardObj";

export default class XiaoGuiQiuTu extends BaseCard {
    name = "小鬼囚徒"
    ethnicity = ["恶魔"]
    attack = 3
    life = 2
    graded = 1
    description = "嘲讽，亡语：召唤一个1/1的小鬼"
    isMockery = true;

    whenDeadTrigger(contextObj: ContextObj) {
        contextObj.player.cardListInFighting.push(new BaseCardObj(contextObj.sharedCardPool.getByName("XiaoGui")));
    }
}
