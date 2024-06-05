// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_202_battlegroundsImage.png
 */
export default class TaDeV29_4_2_199503 extends BaseCard {
    name = "塔德"
    ethnicity = ["鱼人"]
    attack = 2
    life = 2
    graded = 2
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "当你出售本随从时，随机获取2张鱼人牌。"
        }
        return "当你出售本随从时，随机获取一张鱼人牌。"
    }

    whenBeingSold(flipFlop: FlipFlop) {
        const currentPlayer = flipFlop.currentPlayer;
        let baseCards = flipFlop.contextObj.sharedCardPool.listByEthnicity(['鱼人'], currentPlayer.tavern.graded, false, true);
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
            currentPlayer.addCardInHand(new BaseCardObj(baseCard), flipFlop.contextObj.sharedCardPool)
        }
    }
}
