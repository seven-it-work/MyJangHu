// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_160_battlegroundsImage.png
 */
export default class ZhaCiZhuTouV29_4_2_199503 extends BaseCard {
    name = "炸刺猪头"
    ethnicity = ["野猪人"]
    attack = 3
    life = 4
    graded = 3
    cardType = "minion"
    counter = 0;
    counterResetValue = 3;

    whenInjured(flipFlop: FlipFlop) {
        if (flipFlop.isCurrentCardIsTargetCard()) {
            if (this.counter >= 3) {
                return
            }
            this.counter++;
            const number = this.isGold ? 2 : 1;
            const xianXueBaoShi = flipFlop.contextObj.sharedCardPool.getByName("XianXueBaoShi");
            xianXueBaoShi.life = flipFlop.currentPlayer.bloodGems.life
            xianXueBaoShi.attack = flipFlop.currentPlayer.bloodGems.attack
            for (let i = 0; i < number; i++) {
                const baseCardObj = new BaseCardObj(xianXueBaoShi);
                flipFlop.currentPlayer.addCardInHand(baseCardObj, flipFlop.contextObj.sharedCardPool)
            }
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return `每当本随从受到伤害，获取两张<b>鲜血宝石</b>。<i>（每场战斗限3次。）</i> 每当本随从受到伤害，获取两张<b>鲜血宝石</b>。<i>（还剩${this.counterResetValue - this.counter}次！）</i>`
        }
        return `每当本随从受到伤害，获取一张<b>鲜血宝石</b>。<i>（每场战斗限3次。）</i> 每当本随从受到伤害，获取一张<b>鲜血宝石</b>。<i>（还剩${this.counterResetValue - this.counter}次！次！）</i>`
    }
}
