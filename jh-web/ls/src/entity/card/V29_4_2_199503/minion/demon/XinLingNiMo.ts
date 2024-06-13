// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {TriggerObj} from "../../../../Trigger";
import randomUtil from "../../../../../utils/RandomUtils";
import BaseCardObj from "../../../../../objs/BaseCardObj";
import {FlipFlop} from "../../../../FlipFlop";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_357_battlegroundsImage.png
 */
export default class XinLingNiMoV29_4_2_199503 extends BaseCard {
    name = "心灵泥魔"
    ethnicity = ["恶魔"]
    attack = 3
    life = 2
    graded = 2
    cardType = "minion"

    isNeedSelect = true;

    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return super.needSelectFilter(baseCardObj).filter(card => card.baseCard.ethnicity.includes('恶魔'));
    }

    isWarRoars = true

    warRoar(flipFlop: FlipFlop) {
        let needSelectCard = flipFlop.needSelectCard;
        if (!needSelectCard) {
            // 没有则结束，战斗中不能吞食酒馆
            return;
        }
        const tavern = flipFlop.currentPlayer.tavern;
        const baseCardObjs = Array.from(tavern.getCardList('随从'));
        if (baseCardObjs.length <= 0) {
            return
        }
        const pick = randomUtil.pickone(baseCardObjs);
        tavern.removeCard(pick, flipFlop.contextObj.sharedCardPool)
        const magnification = this.isGold ? 2 : 1;
        needSelectCard.baseCard.addBonus(BonusCreatUtil(flipFlop.currentCard, pick.attack * magnification), true, true)
        needSelectCard.baseCard.addBonus(BonusCreatUtil(flipFlop.currentCard, pick.life * magnification), false, true)
    }

    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>选择一个友方恶魔，使其吞食酒馆中的一个随从，获得其双倍属性值。"
        }
        return "<b>战吼：</b>选择一个友方恶魔，使其吞食酒馆中的一个随从，获得其属性值。"
    }
}
