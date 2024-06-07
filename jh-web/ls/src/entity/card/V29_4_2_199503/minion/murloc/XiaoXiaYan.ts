// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_403_battlegroundsImage.png
 */
export default class XiaoXiaYanV29_4_2_199503 extends BaseCard {
    name = "小瞎眼"
    ethnicity = ["鱼人"]
    attack = 8
    life = 5
    graded = 6
    cardType = "minion"

    endOfRound = true

    descriptionStr() {
        if (this.isGold) {
            return "在你的回合结束时，相邻的随从触发其<b>战吼</b>，触发两次。"
        }
        return "在你的回合结束时，相邻的随从触发其<b>战吼</b>。"
    }

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        const findNeighborCard = flipFlop.currentPlayer.findNeighborCard(flipFlop.currentCard);
        if (findNeighborCard.left) {
            findNeighborCard.left.warRoar({
                ...flipFlop,
                currentCard: findNeighborCard.left
            })
        }
        if (findNeighborCard.right) {
            findNeighborCard.right.warRoar({
                ...flipFlop,
                currentCard: findNeighborCard.right
            })
        }
    }
}
