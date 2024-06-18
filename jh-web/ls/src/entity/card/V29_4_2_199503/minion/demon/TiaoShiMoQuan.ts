// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import {BonusCreatUtil} from "../../../../../objs/Bonus";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_009_battlegroundsImage.png
 */
export default class TiaoShiMoQuanV29_4_2_199503 extends BaseCard {
    name = "挑食魔犬"
    ethnicity = ["恶魔"]
    attack = 1
    life = 1
    graded = 1
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b>战吼：</b>随机吞食酒馆中的一个随从，获得其双倍属性值。"
        }
        return "<b>战吼：</b>随机吞食酒馆中的一个随从，获得其属性值。"
    }

    isWarRoars = true
    warRoar(flipFlop: FlipFlop) {
        const cardList = flipFlop.currentPlayer.tavern.getCardList('随从');
        if (cardList.length <= 0) {
            return
        }
        const baseCardObj = randomUtil.pickone(cardList);
        flipFlop.currentPlayer.tavern.removeCard(baseCardObj, flipFlop.contextObj.sharedCardPool)
        const number = this.isGold ? 2 : 1;
        flipFlop.currentCard.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), baseCardObj.life * number, false, true)
        flipFlop.currentCard.addBonus(new FlipFlop({...flipFlop,targetCard:flipFlop.currentCard}), baseCardObj.attack * number, true, true)
    }
}
