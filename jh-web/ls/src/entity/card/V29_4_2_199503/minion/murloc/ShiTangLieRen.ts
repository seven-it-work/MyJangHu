// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG_UNG_073_battlegroundsImage.png
 */
export default class ShiTangLieRenV29_4_2_199503 extends BaseCard {
    name = "石塘猎人"
    ethnicity = ["鱼人"]
    attack = 2
    life = 3
    graded = 1
    cardType = "minion"
    isNeedSelect = true
    isWarRoars = true

    descriptionStr() {
        return "<b>战吼：</b>使一个友方鱼人获得+1/+1。"
    }

    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return super.needSelectFilter(baseCardObj).filter(item => item.baseCard.ethnicity.includes('鱼人'));
    }

    warRoar(flipFlop: FlipFlop) {
        const needSelectCard = flipFlop.needSelectCard;
        if (!needSelectCard) {
            return
        }
        let magnification = this.isGold ? 2 : 1;
        this.addBonus(BonusCreatUtil(flipFlop.currentCard, magnification), true, !flipFlop.currentPlayer.isEndRound)
        this.addBonus(BonusCreatUtil(flipFlop.currentCard, magnification), false, !flipFlop.currentPlayer.isEndRound)
    }
}
