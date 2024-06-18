// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_303_battlegroundsImage.png
 */
export default class KaErJiaV29_4_2_199503 extends BaseCard {
    name = "卡尔加"
    ethnicity = ["野猪人"]
    attack = 4
    life = 4
    graded = 6
    cardType = "minion"
    endOfRound = true

    whenTheRoundIsOver(flipFlop: FlipFlop) {
        const baseCardObjs = flipFlop.currentPlayer.getCardList().filter(card => card.id !== flipFlop.currentCard.id);
        const xianXueBaoShi = flipFlop.contextObj.sharedCardPool.getByName("XianXueBaoShi");
        xianXueBaoShi.life = flipFlop.currentPlayer.bloodGems.life
        xianXueBaoShi.attack = flipFlop.currentPlayer.bloodGems.attack
        baseCardObjs.forEach(card => {
            const xianXueBaoShiCardObj = new BaseCardObj(xianXueBaoShi);
            xianXueBaoShiCardObj.whenUsed(new FlipFlop({
                ...flipFlop,
                currentCard: xianXueBaoShiCardObj,
                needSelectCard: card
            }))
        })
    }


    descriptionStr() {
        if (this.isGold) {
            return "在你的回合结束时，对你的其他随从各使用2张<b>鲜血宝石</b>。"
        }
        return "在你的回合结束时，对你的其他随从各使用一张<b>鲜血宝石</b>。"
    }
}
