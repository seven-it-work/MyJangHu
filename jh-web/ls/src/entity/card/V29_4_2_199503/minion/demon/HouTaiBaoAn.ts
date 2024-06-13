// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_528_battlegroundsImage.png
 */
export default class HouTaiBaoAnV29_4_2_199503 extends BaseCard {
    name = "后台保安"
    ethnicity = ["恶魔"]
    attack = 4
    life = 5
    graded = 1
    cardType = "minion"
    isWarRoars = true

    warRoar(flipFlop: FlipFlop) {
        const number = this.isGold ? 2 : 1;
        for (let i = 0; i < number; i++) {
            flipFlop.currentPlayer.changeLife(flipFlop.currentCard, -1, flipFlop.contextObj, false)
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>对你的英雄造成1点伤害，触发两次。"
        }
        return "<b>战吼：</b>对你的英雄造成1点伤害。"
    }
}
