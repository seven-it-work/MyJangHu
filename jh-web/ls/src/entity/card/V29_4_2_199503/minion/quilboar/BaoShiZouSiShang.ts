// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_155_battlegroundsImage.png
 */
export default class BaoShiZouSiShangV29_4_2_199503 extends BaseCard {
    name = "宝石走私商"
    ethnicity = ["野猪人"]
    attack = 3
    life = 4
    graded = 4
    cardType = "minion"
    isWarRoars = true

    warRoar(flipFlop: FlipFlop) {
        var number = this.isGold ? 2 : 1;
        const xianXueBaoShi = flipFlop.contextObj.sharedCardPool.getByName("XianXueBaoShi");
        xianXueBaoShi.life = flipFlop.currentPlayer.bloodGems.life
        xianXueBaoShi.attack = flipFlop.currentPlayer.bloodGems.attack
        flipFlop.currentPlayer.getCardList().filter(card => card.id !== flipFlop.currentCard.id).forEach(card => {
            for (let i = 0; i < number; i++) {
                const baseCardObj = new BaseCardObj(xianXueBaoShi);
                baseCardObj.whenUsed(new FlipFlop({
                    ...flipFlop,
                    currentCard: baseCardObj,
                    needSelectCard: flipFlop.currentCard
                }))
            }
        })
    }

    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>对你的所有其他随从各使用2张<b>鲜血宝石</b>。"
        }
        return "<b>战吼：</b>对你的所有其他随从各使用一张<b>鲜血宝石</b>。"
    }
}
