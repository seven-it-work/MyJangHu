// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";
import randomUtil from "../../../../../utils/RandomUtils.ts";
import BaseCardObj from "../../../../../objs/BaseCardObj.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_360_battlegroundsImage.png
 */
export default class XunBaoYuRenV29_4_2_199503 extends BaseCard {
    name = "寻宝鱼人"
    ethnicity = ["鱼人"]
    attack = 3
    life = 3
    graded = 3
    cardType = "minion"


    descriptionStr() {
        if (this.isGold) {
            return "<b>亡语：</b>随机使你手牌中的一张随从牌获得+10/+10。"
        }
        return "<b>亡语：</b>随机使你手牌中的一张随从牌获得+5/+5。"
    }

    whenDeath(flipFlop: FlipFlop) {
        var handCardList = flipFlop.currentPlayer.handCardList;
        if (handCardList.length <= 0) {
            return
        }
        var baseCardObj: BaseCardObj = randomUtil.pickone(handCardList);
        let magnification = this.isGold ? 2 : 1;
        baseCardObj.baseCard.attackBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: this.name,
            markupValue: magnification * 5
        })
        baseCardObj.baseCard.lifeBonus.push({
            baseCardId: flipFlop.currentCard.id,
            baseCardName: this.name,
            markupValue: magnification * 5
        })
    }
}
