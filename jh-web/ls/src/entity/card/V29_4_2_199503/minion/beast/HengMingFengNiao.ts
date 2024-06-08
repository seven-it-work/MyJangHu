// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {TriggerObj} from "../../../../Trigger";
import {FlipFlop} from "../../../../FlipFlop.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_805_battlegroundsImage.png
 */
export default class HengMingFengNiaoV29_4_2_199503 extends BaseCard {
    name = "哼鸣蜂鸟"
    ethnicity = ["野兽"]
    attack = 2
    life = 4
    graded = 2
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "你的其他野兽拥有+4攻击力。"
        }
        return "你的其他野兽拥有+2攻击力。"
    }

    whenSummoned(flipFlop: FlipFlop) {
        var cardList = flipFlop.currentPlayer.getCardList();
        const magnification = this.isGold ? 2 : 1;
        cardList.forEach(card=>{
            card.baseCard.addBonus(flipFlop.currentCard,magnification*2,true)
        })
    }

    whenDeath(flipFlop: FlipFlop) {

    }

    whenCardUsedTrigger(triggerObj: TriggerObj) {

    }

    whenSaleCardTrigger(triggerObj: TriggerObj) {

    }
}
