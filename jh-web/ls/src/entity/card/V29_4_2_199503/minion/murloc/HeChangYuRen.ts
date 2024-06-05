// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_354_battlegroundsImage.png
 */
export default class HeChangYuRenV29_4_2_199503 extends BaseCard {
    name = "合唱鱼人"
    ethnicity = ["鱼人"]
    attack = 6
    life = 6
    graded = 6
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b>战斗开始时：</b>获得你手牌中所有随从牌的双倍属性值。"
        }
        return "<b>战斗开始时：</b>获得你手牌中所有随从牌的属性值。"
    }

    /**
     * 战斗开始时
     */
    atTheBeginningOfTheBattle=true

    whenTheBattleBegan(flipFlop: FlipFlop) {
        var handCardList = flipFlop.currentPlayer.handCardList;
        const number = this.isGold ? 2 : 1;
        this.lifeBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: this.name,
            markupValue: handCardList.map(card => card.life).reduce((v1, v2) => v1 + v2, 0) * number
        })
        this.attackBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: this.name,
            markupValue: handCardList.map(card => card.attack).reduce((v1, v2) => v1 + v2, 0) * number
        })
    }
}
