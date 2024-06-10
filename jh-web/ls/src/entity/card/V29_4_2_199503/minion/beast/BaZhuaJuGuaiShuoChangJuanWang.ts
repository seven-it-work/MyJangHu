// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";
import BaseCardObj from "../../../../../objs/BaseCardObj.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_804_battlegroundsImage.png
 */
export default class BaZhuaJuGuaiShuoChangJuanWangV29_4_2_199503 extends BaseCard {
    name = "八爪巨怪，说唱卷王"
    ethnicity = ["野兽"]
    attack = 8
    life = 8
    graded = 5
    cardType = "minion"
    // todo 三连计数器取最高
    counter = 1;
    isDeadLanguage = true
    isOtherTriggering = true

    descriptionStr() {
        if (this.isGold) {
            return `<b>亡语：</b>召唤一个 ${this.counter * 4}/${this.counter * 4} 的触手。<i>（在战斗中，在你召唤一个随从后，触手永久获得+4/+4！）</i>`
        }
        return `<b>亡语：</b>召唤一个 ${this.counter * 2}/${this.counter * 2} 的触手。<i>（在战斗中，在你召唤一个随从后，触手永久获得+2/+2！）</i>`
    }

    deadLanguage(flipFlop: FlipFlop) {
        console.log(2,flipFlop.currentCard.baseCard.name,flipFlop.isCurrentCardIsTargetCard())
        if (flipFlop.isCurrentCardIsTargetCard()) {
            const baZhuaJuGuaiDeChuShou = flipFlop.contextObj.sharedCardPool.getByName("BaZhuaJuGuaiDeChuShou");
            let magnification = this.isGold ? 4 : 2;
            baZhuaJuGuaiDeChuShou.life = this.counter * magnification
            baZhuaJuGuaiDeChuShou.attack = this.counter * magnification
            flipFlop.currentPlayer.addCard2(new BaseCardObj(baZhuaJuGuaiDeChuShou), flipFlop.currentCard, flipFlop);
        }
    }

    whenSummoned(flipFlop: FlipFlop) {
        if (!flipFlop.isCurrentCardIsTargetCard() && flipFlop.currentLocation === '战斗') {
            this.counter++
        }
    }
}
