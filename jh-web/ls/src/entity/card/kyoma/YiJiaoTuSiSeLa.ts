import BaseCard from "../../baseCard";
import {TriggerObj} from "../../Trigger";
import randomUtil from "../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../objs/BaseCardObj.ts";
export default class YiJiaoTuSiSeLa extends BaseCard {
    name = "异教徒斯瑟拉"
    accompanyingRace = ["恶魔"]
    attack = 8
    life = 5
    graded = 6
    description = "潜行。<b>亡语</b>：召唤你在本场战斗中死亡的第一个恶魔，保留其额外效果。"
    isSneak = true;

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        const currentCard = triggerObj.currentCard;
        if (!currentCard) {
            return
        }
        const baseCardObjs = currentPlayer.deadCardListInFighting.filter(card => card.baseCard.ethnicity.includes("恶魔"));
        if (baseCardObjs.length <= 0) {
            return;
        }
        currentPlayer.addCard(baseCardObjs[0], currentPlayer.findNextCard(currentCard), triggerObj);
        console.log(`(${currentPlayer.name})的【${currentCard.baseCard.name}(${currentCard.attack}/${currentCard.life})】触发亡语：召唤你在本场战斗中死亡的第一个恶魔【${baseCardObjs[0].baseCard.name}】，保留其额外效果。`)
    }
}
