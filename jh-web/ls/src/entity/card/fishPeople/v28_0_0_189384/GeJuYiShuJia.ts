import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtils from "../../../../utils/RandomUtils";

export default class GeJuYiShuJiaV28 extends BaseCard {
    name = "歌剧异术家"
    ethnicity = ["鱼人"]
    attack = 5
    life = 2
    graded = 5

    descriptionStr() {
        let txt = '一个'
        if (this.isGold) {
            txt = '2个'
        }
        return `烈毒。亡语：使${txt}友方鱼人获得烈毒。`
    }

    isHighlyToxic = true

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        console.log(`(${currentPlayer.name})的【${this.name}】亡语触发：${this.descriptionStr()}`)
        const cardList = currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('鱼人'));
        if (cardList.length <= 0) {
            return;
        }
        const baseCardObjs = randomUtils.pick(cardList, 2);
        if (baseCardObjs.length <= 0) {
            return;
        }
        baseCardObjs[0].baseCard.isHighlyToxic = true;
        if (this.isGold) {
            if (baseCardObjs[1]) {
                baseCardObjs[1].baseCard.isHighlyToxic = true;
            }
        }
    }
}
