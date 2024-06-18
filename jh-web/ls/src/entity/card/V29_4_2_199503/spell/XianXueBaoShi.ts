// 将seven替换为路径
import BaseCard from "../../../baseCard";
import {FlipFlop} from "../../../FlipFlop";
import {BonusCreatUtil} from "../../../../objs/Bonus";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_GEM_battlegroundsImage.png
 */
export default class XianXueBaoShi extends BaseCard {
    name = "鲜血宝石"
    attack = 0
    life = 0
    graded = 1
    cardType = "spell"
    isSell = false
    isNeedSelect = true
    type = '法术'

    descriptionStr() {
        return `使一个随从获得+${this.attack}/+${this.life}。`
    }

    whenUsed(flipFlop: FlipFlop) {
        if (!flipFlop.needSelectCard) {
            return
        }
        flipFlop.needSelectCard.addBonus(new FlipFlop({
            ...flipFlop,
            targetCard: flipFlop.currentCard
        }), this.attack, true, true)
        flipFlop.needSelectCard.addBonus(new FlipFlop({
            ...flipFlop,
            targetCard: flipFlop.currentCard
        }), this.life, false, true)
    }
}
