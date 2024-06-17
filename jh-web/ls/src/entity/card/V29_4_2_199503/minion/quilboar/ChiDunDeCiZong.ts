// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_708_battlegroundsImage.png
 */
export default class ChiDunDeCiZongV29_4_2_199503 extends BaseCard {
    name = "迟钝的刺鬃"
    ethnicity = ["野猪人"]
    attack = 6
    life = 7
    graded = 6
    cardType = "minion"
    endOfRound = true

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        const number = this.isGold ? 2 : 1;
        flipFlop.currentPlayer.bloodGemsAdd(true, number)
        flipFlop.currentPlayer.bloodGemsAdd(false, number)
    }


    descriptionStr() {
        if (this.isGold) {
            return "在你的回合结束时，你的<b>鲜血宝石</b>在本局对战中使随从额外获得+2/+2。"
        }
        return "在你的回合结束时，你的<b>鲜血宝石</b>在本局对战中使随从额外获得+1/+1。"
    }
}
