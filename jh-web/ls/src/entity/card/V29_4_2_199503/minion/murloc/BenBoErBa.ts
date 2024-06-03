// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_012_battlegroundsImage.png
 */
export default class BenBoErBaV29_4_2_199503 extends BaseCard {
    name = "奔波尔霸"
    ethnicity = ["鱼人"]
    attack = 4
    life = 4
    graded = 6
    cardType = "minion"
    isNeedSelect = true
    isWarRoars = true


    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>你每控制一个鱼人，使一个友方鱼人获得+8/+8。"
        }
        return "<b>战吼：</b>你每控制一个鱼人，使一个友方鱼人获得+4/+4。"
    }

    needSelectFilter(baseCardObj: BaseCardObj[]): BaseCardObj[] {
        return super.needSelectFilter(baseCardObj).filter(item => item.baseCard.ethnicity.includes('鱼人'));
    }

    warRoar(flipFlop: FlipFlop) {
        var baseCardObjs = flipFlop.currentPlayer.getCardList().filter(item => item.baseCard.ethnicity.includes('鱼人'));
        if (baseCardObjs.length <= 0) {
            return;
        }
        var needSelectCard = flipFlop.needSelectCard;
        if (!needSelectCard) {
            return
        }
        let magnification = this.isGold ? 8 : 4;
        needSelectCard.baseCard.attackBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: this.name,
            markupValue: magnification * baseCardObjs.length
        })
        needSelectCard.baseCard.lifeBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: this.name,
            markupValue: magnification * baseCardObjs.length
        })
    }
}
