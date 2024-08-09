// 将seven替换为路径
import BaseCard from "../../../baseCard";
import {FlipFlop} from "../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_169_battlegroundsImage.png
 */
export default class AiZeLiTeQiangHuaV29_4_2_199503 extends BaseCard {
    name = "艾泽里特强化"
    attack = 0
    life = 0
    graded = 1
    cardType = "tavern"
    type = "法术"
    accompanyingRace = ["中立"]

    descriptionStr() {
        return "使你的所有随从获得+4/+4。"
    }

    whenSpellUse(flipFlop: FlipFlop) {
        flipFlop.currentPlayer.getCardList().forEach(card => {
            card.addBonus(flipFlop, 4, true, !flipFlop.currentPlayer.isEndRound)
            card.addBonus(flipFlop, 4, false, !flipFlop.currentPlayer.isEndRound)
        })
    }

}
