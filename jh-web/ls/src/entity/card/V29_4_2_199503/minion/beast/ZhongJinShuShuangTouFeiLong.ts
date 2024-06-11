// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";
import randomUtil from "../../../../../utils/RandomUtils";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_801_battlegroundsImage.png
 */
export default class ZhongJinShuShuangTouFeiLongV29_4_2_199503 extends BaseCard {
    name = "重金属双头飞龙"
    ethnicity = ["野兽"]
    attack = 5
    life = 3
    graded = 4
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b>嘲讽</b>。<b>亡语：</b>触发相邻随从的<b>战吼</b>。"
        }
        return "<b>嘲讽</b>。<b>亡语：</b>触发一个相邻随从的<b>战吼</b>。"
    }

    isDeadLanguage = true

    deadLanguage(flipFlop: FlipFlop) {
        const findNeighborCard = flipFlop.currentPlayer.findNeighborCard(flipFlop.currentCard);
        const tempCard: BaseCardObj[] = []
        if (findNeighborCard.left && findNeighborCard.left.baseCard.isWarRoars) {
            tempCard.push(findNeighborCard.left)
        }
        if (findNeighborCard.right && findNeighborCard.right.baseCard.isWarRoars) {
            tempCard.push(findNeighborCard.right)
        }
        if (tempCard.length <= 0) {
            return
        }
        this.showLog(flipFlop)
        if (this.isGold) {
            tempCard.forEach(card => card.warRoar(new FlipFlop({
                ...flipFlop,
                currentCard: card,
                targetCard: card,
                needSelectCard: undefined
            })))
        } else {
            const baseCardObj = randomUtil.pickone(tempCard);
            baseCardObj.warRoar(new FlipFlop({
                ...flipFlop,
                currentCard: baseCardObj,
                targetCard: baseCardObj,
                needSelectCard: undefined
            }))
        }
    }
}
