// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG_GVG_100_battlegroundsImage.png
 */
export default class PiaoFuGuanChaZheV29_4_2_199503 extends BaseCard {
    name = "漂浮观察者"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 4
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "每当你的英雄在你的回合受到伤害，便获得+4/+4。"
        }
        return "每当你的英雄在你的回合受到伤害，便获得+2/+2。"
    }

    whenPlayerInjured(flipFlop: FlipFlop) {
        const number = this.isGold ? 2 : 1;
        flipFlop.currentCard.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), 2 * number, true, true)
        flipFlop.currentCard.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), 2 * number, false, true)
    }
}
