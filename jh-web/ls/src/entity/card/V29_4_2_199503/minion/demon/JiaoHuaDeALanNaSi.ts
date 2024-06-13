// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";
import BaseCardObj from "../../../../../objs/BaseCardObj";
import randomUtil from "../../../../../utils/RandomUtils";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_821_battlegroundsImage.png
 */
export default class JiaoHuaDeALanNaSiV29_4_2_199503 extends BaseCard {
    name = "狡猾的阿兰纳丝"
    ethnicity = ["恶魔"]
    attack = 3
    life = 10
    graded = 4
    cardType = "minion"

    descriptionStr() {
        if (this.isGold) {
            return "每当本随从受到伤害，随机对一个敌方随从造成5点伤害，触发两次。"
        }
        return "每当本随从受到伤害，随机对一个敌方随从造成5点伤害。"
    }

    whenInjured(flipFlop: FlipFlop) {
        const number = this.isGold ? 2 : 1;
        this.showLog(flipFlop)
        for (let i = 0; i < number; i++) {
            const cardListInFighting: BaseCardObj[] = flipFlop.targetPlayer.cardListInFighting;
            if (cardListInFighting.length <= 0) {
                return;
            }
            const pick: BaseCardObj = randomUtil.pickone(cardListInFighting);
            pick.whenInjured(new FlipFlop({
                ...flipFlop,
                currentPlayer: flipFlop.targetPlayer,
                targetPlayer: flipFlop.currentPlayer,
                currentCard: pick,
                targetCard: pick,
                otherData: {
                    harmed: 5
                }
            }))
        }
    }
}
