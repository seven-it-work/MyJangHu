// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";
import BaseCardObj from "../../../../../objs/BaseCardObj";
import {BonusPlayerCreatUtil} from "../../../../../objs/Bonus";

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
        const magnification = this.isGold ? 2 : 1;
        if (flipFlop.isCurrentCardIsTargetCard()) {
            this.showLog(flipFlop)
            flipFlop.currentPlayer.bonusBattleAdd(
                BonusPlayerCreatUtil(flipFlop.currentCard, 2 * magnification, (baseCardObj: BaseCardObj) => {
                        return baseCardObj.id !== flipFlop.currentCard.id && baseCardObj.baseCard.ethnicity.includes('野兽');
                    }
                ), true)
        }
    }

    whenDeath(flipFlop: FlipFlop) {
        console.log(`(${flipFlop.currentPlayer.name})的【${this.name}(${this.attack}/${this.life})】死亡，移除加成}`)
        this.extracted(flipFlop);
    }

    whenBeingSold(flipFlop: FlipFlop) {
        this.extracted(flipFlop);
    }

    private extracted(flipFlop: FlipFlop) {
        flipFlop.currentPlayer.bonusBattleRemove(flipFlop.currentCard.id, true)
    }
}
