// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_030_battlegroundsImage.png
 */
export default class BaiGeErGeGuoWangV29_4_2_199503 extends BaseCard {
    name = "拜戈尔格国王"
    ethnicity = ["鱼人"]
    attack = 5
    life = 3
    graded = 4
    cardType = "minion"
    isWarRoars = true

    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>使你的其他鱼人获得+4/+4。"
        }
        return "<b>战吼：</b>使你的其他鱼人获得+2/+2。"
    }

    warRoar(flipFlop: FlipFlop) {
        const baseCardObjs = flipFlop.currentPlayer.getCardList()
            .filter(card => card.baseCard.ethnicity.includes('鱼人'))
            .filter(card => card.id !== flipFlop.currentCard.id);
        if (baseCardObjs.length <= 0) {
            return;
        }
        const number = this.isGold ? 2 : 1;
        baseCardObjs.forEach(card => {
            card.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), number, true, !flipFlop.currentPlayer.isEndRound)
            card.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), number, false, !flipFlop.currentPlayer.isEndRound)
        })
    }
}
