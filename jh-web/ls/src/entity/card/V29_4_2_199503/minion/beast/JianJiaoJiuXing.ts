// 将seven替换为路径
import BaseCard from "../../../../baseCard";
import {FlipFlop} from "../../../../FlipFlop.ts";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_808_battlegroundsImage.png
 */
export default class JianJiaoJiuXingV29_4_2_199503 extends BaseCard {
    name = "尖角救星"
    ethnicity = ["野兽"]
    attack = 8
    life = 2
    graded = 5
    cardType = "minion"
    isMockery = true
    isRebirth = true
    isDeadLanguage = true

    descriptionStr() {
        if (this.isGold) {
            return "<b><b>嘲讽</b>。<b>复生</b></b> <b>亡语：</b>使你的随从获得+1生命值并对其造成1点伤害，触发两次。"
        }
        return "<b><b>嘲讽</b>。<b>复生</b></b> <b>亡语：</b>使你的随从获得+1生命值并对其造成1点伤害。"
    }

    whenDeath(flipFlop: FlipFlop) {
        var cardList = flipFlop.currentPlayer.getCardList();
        const magnification = this.isGold ? 2 : 1;
        for (let i = 0; i < magnification; i++) {
            cardList.forEach(card => {
                card.baseCard.addBonus(flipFlop.currentCard, 1, false)
            })
            cardList.forEach(card => {
                card.whenInjured(new FlipFlop({
                    ...flipFlop,
                    currentCard: card,
                    targetCard: card,
                    otherData: {
                        harmed: 1
                    }
                }))
            })
        }
    }
}
