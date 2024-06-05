// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_350_battlegroundsImage.png
 */
export default class DiYinTiQinYuRenV29_4_2_199503 extends BaseCard {
    name = "低音提琴鱼人"
    ethnicity = ["鱼人"]
    attack = 7
    life = 2
    graded = 4
    cardType = "minion"
    isDeadLanguage = true

    descriptionStr() {
        if (this.isGold) {
            return "<b>亡语：</b>召唤你手牌中生命值最高的2个鱼人，其登场仅限本场战斗。"
        }
        return "<b>亡语：</b>召唤你手牌中生命值最高的鱼人，其登场仅限本场战斗。"
    }

    deadLanguage(flipFlop: FlipFlop) {
        const baseCardObjs = flipFlop.currentPlayer.handCardList.filter(card => !card.isLock).sort((c1,c2)=>c2.life-c1.life)
        const number = this.isGold ? 2 : 1;
        for (let i = 0; i < number; i++) {
            const pickElement = baseCardObjs[i];
            if (pickElement) {
                pickElement.isLock = true
                flipFlop.currentPlayer.addCard2(pickElement, flipFlop.currentCard, {
                    ...flipFlop,
                    currentCard: pickElement
                })
            } else {
                return
            }
        }
    }
}
