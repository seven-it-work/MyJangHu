// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_121_battlegroundsImage.png
 */
export default class DuoLuoZheXinShiV29_4_2_199503 extends BaseCard {
    name = "堕落者信使"
    ethnicity = ["恶魔"]
    attack = 9
    life = 6
    graded = 5
    cardType = "minion"
    isWarRoars = true
    isSell = false

    warRoar(flipFlop: FlipFlop) {
        const number = this.isGold ? 2 : 1;
        flipFlop.currentPlayer.tavern.attackBonus.push(BonusCreatUtil(flipFlop.currentCard, number))
        flipFlop.currentPlayer.tavern.lifeBonus.push(BonusCreatUtil(flipFlop.currentCard, number))
    }


    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>在本局对战中，你的队伍酒馆中的随从拥有+2/+2。"
        }
        return "<b>战吼：</b>在本局对战中，你的队伍酒馆中的随从拥有+1/+1。"
    }
}
