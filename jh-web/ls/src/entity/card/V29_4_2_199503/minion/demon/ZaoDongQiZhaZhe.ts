// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_006_battlegroundsImage.png
 */
export default class ZaoDongQiZhaZheV29_4_2_199503 extends BaseCard {
    name = "躁动欺诈者"
    ethnicity = ["恶魔"]
    attack = 3
    life = 3
    graded = 2
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b>亡语：</b>使另一个友方随从获得本随从的生命值上限，触发两次。"
        }
        return "<b>亡语：</b>使另一个友方随从获得本随从的生命值上限。"
    }

    isDeadLanguage = true

    deadLanguage(flipFlop: FlipFlop) {
        const number = this.isGold ? 2 : 1;
        const cardList = flipFlop.currentPlayer.getCardList();
        if (cardList.length <= 0) {
            return
        }
        for (let i = 0; i < number; i++) {
            const baseCardObj = randomUtil.pickone(cardList);
            baseCardObj.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), this.getPrimitiveLife(), false, false)
        }
    }
}
