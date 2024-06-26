// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_990_battlegroundsImage.png
 */
export default class HuoBaoXiongJiV29_4_2_199503 extends BaseCard {
    name = "火暴雄鸡"
    ethnicity = ["野兽"]
    attack = 3
    life = 4
    graded = 2
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "<b>战斗开始时：</b>对相邻随从造成1点伤害并使其获得+4攻击力，触发两次。"
        }
        return "<b>战斗开始时：</b>对相邻随从造成1点伤害并使其获得+4攻击力。"
    }

    atTheBeginningOfTheBattle=true


    whenTheBattleBegan(flipFlop: FlipFlop) {
        const findNeighborCard = flipFlop.currentPlayer.findNeighborCard(flipFlop.currentCard);
        const magnification = this.isGold ? 2 : 1;
        for (let i = 0; i < magnification; i++) {
            if (findNeighborCard.left){
                findNeighborCard.left.whenInjured(new FlipFlop({
                    ...flipFlop,
                    currentCard:findNeighborCard.left,
                    targetCard:flipFlop.currentCard,
                    otherData:{
                        harmed:1
                    }
                }))
                findNeighborCard.left.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}),4,true,false)
            }
            if (findNeighborCard.right){
                findNeighborCard.right.whenInjured(new FlipFlop({
                    ...flipFlop,
                    currentCard:findNeighborCard.right,
                    targetCard:flipFlop.currentCard,
                    otherData:{
                        harmed:1
                    }
                }))
                findNeighborCard.right.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}),4,true,false)
            }
        }
    }
}
