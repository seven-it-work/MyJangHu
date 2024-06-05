// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG_EX1_103_battlegroundsImage.png
 */
export default class HanGuangXianZhiV29_4_2_199503 extends BaseCard {
    name = "寒光先知"
    ethnicity = ["鱼人"]
    attack = 2
    life = 3
    graded = 2
    cardType = "minion"


    descriptionStr() {
        return "<b>战吼：</b>使你的其他鱼人获得+2生命值。"
    }

    isWarRoars = true

    warRoar(flipFlop: FlipFlop) {
        const cardList = flipFlop.currentPlayer.getCardList();
        cardList.forEach(card => {
            card.baseCard.lifeBonus.push({
                baseCardId: flipFlop.currentCard.id,
                baseCardName: this.name,
                markupValue: 2
            })
        })
    }
}
