// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_174_battlegroundsImage.png
 */
export default class LingHunHuiSuZheV29_4_2_199503 extends BaseCard {
    name = "灵魂回溯者"
    ethnicity = ["恶魔"]
    attack = 3
    life = 1
    graded = 2
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "在你的英雄受到伤害后，回溯该伤害并使本随从获得+2生命值。"
        }
        return "在你的英雄受到伤害后，回溯该伤害并使本随从获得+1生命值。"
    }

    whenPlayerInjured(flipFlop: FlipFlop) {
        if (!flipFlop.otherData.harmed) {
            return
        }
        // 伤害回溯，护甲如果没了，回溯变成生命值就是30+1=>31
        flipFlop.currentPlayer.changeLife(flipFlop.currentCard, flipFlop.otherData.harmed, flipFlop.contextObj)
        this.addBonus(BonusCreatUtil(flipFlop.currentCard, this.isGold ? 2 : 1), false, true)
    }
}
