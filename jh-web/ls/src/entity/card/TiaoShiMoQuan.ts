import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj.ts";
import randomUtil from "../../utils/RandomUtils.ts";
import {TriggerObj} from "../Trigger";

export default class TiaoShiMoQuan extends BaseCard {
    name = "挑食魔犬"
    ethnicity = ["恶魔"]
    attack = 1
    life = 1
    graded = 1
    description = "<b>战吼</b>：随机吞噬酒馆一个随从，获取其属性值。"

    whenCardUsedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const tavern = currentPlayer.tavern;
        const baseCardObjs = Array.from(tavern.currentCard.values()).filter(card => card.baseCard.type === '随从');
        if (baseCardObjs.length <= 0) {
            return;
        }
        const pick = randomUtil.pickone(baseCardObjs);
        tavern.removeCard(pick, triggerObj.contextObj)
        this.attack += pick.baseCard.attack;
        this.life += pick.baseCard.life;
    }
}
