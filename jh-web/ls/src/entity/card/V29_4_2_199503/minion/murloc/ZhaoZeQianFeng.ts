// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_401_battlegroundsImage.png
 */
export default class ZhaoZeQianFengV29_4_2_199503 extends BaseCard {
    name = "沼泽前锋"
    ethnicity = ["鱼人"]
    attack = 1
    life = 5
    graded = 1
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "在你召唤一个鱼人后，获得+2攻击力。"
        }
        return "在你召唤一个鱼人后，获得+1攻击力。"
    }

    isOtherTriggering = true

    whenSummoned(flipFlop: FlipFlop) {
        if (flipFlop.isCurrentCardIsTargetCard()) {
            return
        }
        let magnification = this.isGold ? 2 : 1;
        this.addBonus(BonusCreatUtil(flipFlop.currentCard, magnification), true, !flipFlop.currentPlayer.isEndRound)
    }
}
