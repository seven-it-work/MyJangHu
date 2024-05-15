import BaseCard from "../../../baseCard";
import {TriggerObj} from "../../../Trigger";
import randomUtils from "../../../../utils/RandomUtils";

export default class GeJuYiShuJiaV28 extends BaseCard {
    name = "歌剧异术家"
    ethnicity = ["鱼人"]
    attack = 5
    life = 2
    graded = 5
    description = "烈毒。亡语：使一个友方鱼人获得烈毒。"
    isHighlyToxic = true

    whenDeadTrigger(triggerObj: TriggerObj) {
        const currentPlayer = triggerObj.currentPlayer;
        if (!currentPlayer) {
            return
        }
        console.log(`(${currentPlayer.name})的【${this.name}】触发：亡语：使一个友方鱼人获得烈毒。`)
        const cardList = currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('鱼人'));
        if (cardList.length <= 0) {
            return;
        }
        const baseCardObj = randomUtils.pickone(cardList);
        baseCardObj.baseCard.isHighlyToxic = true;
    }
}

