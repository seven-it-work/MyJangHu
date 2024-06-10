// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_078_battlegroundsImage.png
 */
export default class JuDaDeJinGangYingWuV29_4_2_199503 extends BaseCard {
    name = "巨大的金刚鹦鹉"
    ethnicity = ["野兽"]
    attack = 4
    life = 3
    graded = 3
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "在本随从攻击后，触发你最左边的<b>亡语</b>。触发两次"
        }
        return "在本随从攻击后，触发你最左边的<b>亡语</b>。"
    }

    whenAttacking(flipFlop: FlipFlop) {
        const baseCardObjs = flipFlop.currentPlayer.getCardList().filter(card => card.baseCard.isDeadLanguage);
        if (baseCardObjs.length <= 0) {
            return
        }
        this.showLog(flipFlop)
        const number = this.isGold ? 2 : 1;
        for (let i = 0; i < number; i++) {
            const baseCardObj = baseCardObjs[0];
            baseCardObj.deadLanguage(new FlipFlop({
                ...flipFlop,
                currentCard: baseCardObj,
            }))
        }
    }
}
