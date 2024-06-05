// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_020_battlegroundsImage.png
 */
export default class ManYuChiHouV29_4_2_199503 extends BaseCard {
    name = "蛮鱼斥候"
    ethnicity = ["鱼人"]
    attack = 3
    life = 2
    graded = 5
    cardType = "minion"


    descriptionStr() {
        return "<b>战吼：</b>如果你控制其他任何鱼人，则<b>发现</b>一张鱼人牌。"
    }

    isWarRoars = true

    warRoar(flipFlop: FlipFlop) {
        const cardList = flipFlop.currentPlayer.getCardList();
        const baseCardObjs = cardList.filter(card => card.baseCard.ethnicity.includes("鱼人"));
        if (baseCardObjs.length <= 0) {
            return
        }
        // 只能发现低等级的
        let baseCards = flipFlop.contextObj.sharedCardPool.listByEthnicity(['鱼人'], flipFlop.currentPlayer.tavern.graded, false, true);
        if (baseCards.length <= 0) {
            // 发现完了，只能发现1级鱼人
            baseCards = flipFlop.contextObj.sharedCardPool.listByEthnicity(['鱼人'], 1);
        }
        baseCards = randomUtil.pick(baseCards, 2);
        if (baseCards.length <= 0) {
            return;
        }
        let magnification = this.isGold ? 2 : 1;
        for (let i = 0; i < magnification; i++) {
            const baseCard = baseCards[i];
            if (!baseCard) {
                return;
            }
            flipFlop.contextObj.sharedCardPool.cardOut(baseCard)
            flipFlop.currentPlayer.addCardInHand(new BaseCardObj(baseCard), flipFlop.contextObj.sharedCardPool)
        }
    }
}
