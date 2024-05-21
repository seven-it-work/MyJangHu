import BaseCard from "../../../baseCard.ts";
import {TriggerObj} from "../../../Trigger";
import randomUtil from "../../../../utils/RandomUtils";
import BaseCardObj from "../../../../objs/BaseCardObj";

export default class JiaoHuaDeALanNaSiV29 extends BaseCard {
    name = "狡猾的阿兰纳丝"
    ethnicity = ["恶魔"]
    attack = 1
    life = 8
    graded = 4

    descriptionStr() {
        return `每当本随从受到伤害。随机对一个敌方随从造成5点伤害。${this.isGold ? '触发两次' : ''}`
    }

    whenHarmedTrigger(injuring: number, triggerObj: TriggerObj) {
        const targetPlayer = triggerObj.targetPlayer;
        if (!targetPlayer) {
            return
        }
        const cardListInFighting: BaseCardObj[] = targetPlayer.cardListInFighting;
        if (cardListInFighting.length <= 0) {
            return;
        }
        const magnification = this.isGold ? 2 : 1;
        for (let i = 0; i < magnification; i++) {
            const pick: BaseCardObj = randomUtil.pickone(cardListInFighting);
            pick.baseCard.changeInjuriesReceived(5)
        }
    }
}
