import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";

export default class PianZheJiQiRenV28 extends BaseCard {
    name = "偏折机器人"
    ethnicity = ["机械"]
    attack = 3
    life = 2
    graded = 3
    description = "<div><b>圣盾</b></div>在战斗阶段中，每当你召唤一个机械，便获得+2攻击力和圣盾。"
    isHolyShield = true;

    whenOtherSummonedTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        const targetCard = triggerObj.targetCard;
        if (!currentPlayer) {
            return
        }
        if (!targetCard) {
            return
        }
        if (currentPlayer.isEndRound) {
            if (targetCard.baseCard.ethnicity.includes("机械")) {
                console.log(`(${currentPlayer.name})的【${this.name}】的召唤其他随从触发：在战斗阶段中，每当你召唤一个机械，便获得+2攻击力和圣盾。`)
                this.isHolyShield = true;
                this.attack++;
            }
        }
    }
}

