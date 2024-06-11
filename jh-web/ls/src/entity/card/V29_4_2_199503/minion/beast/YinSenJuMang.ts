// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_008_battlegroundsImage.png
 */
export default class YinSenJuMangV29_4_2_199503 extends BaseCard {
    name = "阴森巨蟒"
    ethnicity = ["野兽"]
    attack = 7
    life = 7
    graded = 6
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "<b>亡语：</b>随机召唤 四个<b>亡语</b>随从。"
        }
        return "<b>亡语：</b>随机召唤 两个<b>亡语</b>随从。"
    }

    isDeadLanguage = true

    deadLanguage(flipFlop: FlipFlop) {
        const gold = this.isGold ? 2 : 1;
        const baseCards = flipFlop.contextObj.sharedCardPool.listByDeadLanguageCard(flipFlop.currentPlayer.tavern.graded, gold * 2);
        baseCards.forEach(card => flipFlop.currentPlayer.addCard2(new BaseCardObj(card), flipFlop.currentCard, flipFlop))
    }
}
