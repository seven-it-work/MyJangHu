// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop, inversion} from "../../../../FlipFlop";
import randomUtil from "../../../../../utils/RandomUtils";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_017_battlegroundsImage.png
 */
export default class HeiYaoShiLvEDuoZheV29_4_2_199503 extends BaseCard {
    name = "黑曜石掠夺者"
    ethnicity = ["龙"]
    attack = 7
    life = 7
    graded = 7
    cardType = "minion"
    isSell = false

    whenAttacking(flipFlop: FlipFlop) {
        this.showLog(flipFlop)
        const targetCard = flipFlop.targetCard;
        const findNeighborCard = flipFlop.targetPlayer.findNeighborCard(targetCard);
        const list = []
        if (findNeighborCard.left) {
            list.push(findNeighborCard.left)
        }
        if (findNeighborCard.right) {
            list.push(findNeighborCard.right)
        }
        const dataList = randomUtil.shuffle(list)
        for (let i = 0; i < this.isGold ? 2 : 1; i++) {
            const dataListElement = dataList[i];
            if (dataListElement) {
                dataListElement.whenInjured(new FlipFlop({
                    ...inversion(flipFlop),
                    currentCard: dataListElement,
                    otherData: {harmed: flipFlop.currentCard.attack}
                }))
            }
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return "每当本随从攻击时，对目标及相邻的随从造成等同于本随从攻击力的伤害。"
        }
        return "每当本随从攻击时，对目标及一个相邻的随从造成等同于本随从攻击力的伤害。"
    }
}
