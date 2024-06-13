// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {TriggerObj} from "../../../../Trigger";
import {FlipFlop} from "../../../../FlipFlop";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_016_battlegroundsImage.png
 */
export default class SaGeLaSiDeYongShiV29_4_2_199503 extends BaseCard {
    name = "萨格拉斯的勇士"
    ethnicity = ["恶魔"]
    attack = 10
    life = 10
    graded = 7
    cardType = "minion"
    isSell = false

    descriptionStr() {
        if (this.isGold) {
            return "酒馆中的随从拥有+20/+20。"
        }
        return "酒馆中的随从拥有+10/+10。"
    }

    whenUsed(flipFlop: FlipFlop) {
        const magnification = this.isGold ? 2 : 1;
        flipFlop.currentPlayer.tavern.attackBonus.push(BonusCreatUtil(flipFlop.currentCard, 10 * magnification));
        flipFlop.currentPlayer.tavern.lifeBonus.push(BonusCreatUtil(flipFlop.currentCard, 10 * magnification));
    }

    whenBeingSold(flipFlop: FlipFlop) {
        flipFlop.currentPlayer.tavern.removeBonus(flipFlop.currentCard, 'attack')
        flipFlop.currentPlayer.tavern.removeBonus(flipFlop.currentCard, 'life')
    }
}
