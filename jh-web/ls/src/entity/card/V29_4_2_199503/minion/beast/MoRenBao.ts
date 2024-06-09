// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";
import BaseCardObj from "../../../../../objs/BaseCardObj.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_800_battlegroundsImage.png
 */
export default class MoRenBaoV29_4_2_199503 extends BaseCard {
    name = "魔刃豹"
    ethnicity = ["野兽"]
    attack = 4
    life = 1
    graded = 1
    cardType = "minion"
    isDeadLanguage = true


    descriptionStr() {
        if (this.isGold) {
            return "<b>亡语：</b>召唤两只0/2并具有<b>嘲讽</b>的豹宝宝。"
        }
        return "<b>亡语：</b>召唤两只0/1并具有<b>嘲讽</b>的豹宝宝。"
    }


    deadLanguage(flipFlop: FlipFlop) {
        const byName = flipFlop.contextObj.sharedCardPool.getByName("BaoBaoBao");
        byName.isGold = this.isGold
        flipFlop.currentPlayer.addCard2(new BaseCardObj(byName), flipFlop.currentCard, flipFlop)
        flipFlop.currentPlayer.addCard2(new BaseCardObj(byName), flipFlop.currentCard, flipFlop)
    }
}
