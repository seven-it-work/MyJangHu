// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_201_battlegroundsImage.png
 */
export default class KangQiYeZhuRenV29_4_2_199503 extends BaseCard {
    name = "扛旗野猪人"
    ethnicity = ["野猪人"]
    attack = 3
    life = 5
    graded = 4
    cardType = "minion"
    endOfRound = true

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        const findNeighborCard = flipFlop.currentPlayer.findNeighborCard(flipFlop.currentCard);
        const xianXueBaoShi = flipFlop.contextObj.sharedCardPool.getByName("XianXueBaoShi");
        xianXueBaoShi.life = flipFlop.currentPlayer.bloodGems.life
        xianXueBaoShi.attack = flipFlop.currentPlayer.bloodGems.attack
        if (findNeighborCard.right) {
            const xianXueBaoShiCardObj = new BaseCardObj(xianXueBaoShi);
            xianXueBaoShiCardObj.whenUsed(new FlipFlop({
                ...flipFlop,
                currentCard: xianXueBaoShiCardObj,
                needSelectCard: findNeighborCard.right
            }))
        }
        if (findNeighborCard.left) {
            const xianXueBaoShiCardObj = new BaseCardObj(xianXueBaoShi);
            xianXueBaoShiCardObj.whenUsed(new FlipFlop({
                ...flipFlop,
                currentCard: xianXueBaoShiCardObj,
                needSelectCard: findNeighborCard.left
            }))
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return "在你的回合结束时，对相邻的随从使用2张<b>鲜血宝石</b>。"
        }
        return "在你的回合结束时，对相邻的随从使用一张<b>鲜血宝石</b>。"
    }
}
