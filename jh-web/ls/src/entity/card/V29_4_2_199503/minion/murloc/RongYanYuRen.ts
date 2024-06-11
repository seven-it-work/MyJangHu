// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_046_battlegroundsImage.png
 */
export default class RongYanYuRenV29_4_2_199503 extends BaseCard {
    name = "熔岩鱼人"
    ethnicity = ["鱼人", "元素"]
    attack = 1
    life = 1
    graded = 4
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "在你的回合结束时，获得+2/+2。在本回合中你每使用过一张随从牌，重复一次。"
        }
        return "在你的回合结束时，获得+1/+1。在本回合中你每使用过一张随从牌，重复一次。"
    }

    endOfRound = true

    isOtherTriggering = true

    userCardNumber: number = 0

    whenUsed(flipFlop: FlipFlop) {
        if (flipFlop.targetCard.baseCard.type === '随从') {
            this.userCardNumber++;
        }
    }

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        if (flipFlop.currentLocation === '战场') {
            this.showLog(flipFlop)
            const number = this.isGold ? 2 : 1;
            this.addBonus(BonusCreatUtil(flipFlop.currentCard, number * this.userCardNumber), true, true)
            this.addBonus(BonusCreatUtil(flipFlop.currentCard, number * this.userCardNumber), false, true)
        }
        this.userCardNumber = 0
    }
}
