// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_157_battlegroundsImage.png
 */
export default class ZuoQuZongShiV29_4_2_199503 extends BaseCard {
    name = "作曲鬃师"
    ethnicity = ["野猪人"]
    attack = 3
    life = 10
    graded = 6
    cardType = "minion"

    whenVengeance(flipFlop: FlipFlop) {
        const baseCardObjs = flipFlop.currentPlayer.getCardList().filter(card => card.baseCard.ethnicity.includes('野猪人'));
        this.showLog(flipFlop)
        const number = this.isGold ? 4 : 2;
        const xianXueBaoShi = flipFlop.contextObj.sharedCardPool.getByName("XianXueBaoShi");
        xianXueBaoShi.life = flipFlop.currentPlayer.bloodGems.life
        xianXueBaoShi.attack = flipFlop.currentPlayer.bloodGems.attack
        baseCardObjs.forEach(card => {
            for (let i = 0; i < number; i++) {
                const xianXueBaoShiCardObj = new BaseCardObj(xianXueBaoShi);
                xianXueBaoShiCardObj.whenUsed(new FlipFlop({
                    ...flipFlop,
                    currentCard: xianXueBaoShiCardObj,
                    needSelectCard: card
                }))
            }
        })
    }

    descriptionStr() {
        if (this.isGold) {
            return "<b>复仇（2）：</b>对你的所有野猪人各使用4张<b>鲜血宝石</b>。"
        }
        return "<b>复仇（2）：</b>对你的所有野猪人各使用2张<b>鲜血宝石</b>。"
    }
}
