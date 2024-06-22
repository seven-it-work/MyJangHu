// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {FlipFlop} from "../../../../FlipFlop";

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_811_battlegroundsImage.png
 */
export default class FuLuShenLongYuLongV29_4_2_199503 extends BaseCard {
    name = "福禄神龙玉珑"
    ethnicity = ["龙"]
    attack = 8
    life = 8
    graded = 5
    cardType = "minion"
    atTheBeginningOfTheBattle = true

    whenTheBattleBegan(flipFlop: FlipFlop) {
        const list = flipFlop.currentPlayer.getCardList()
            .filter(card => card.baseCard.classType !== 'FuLuShenLongYuLong')
            .sort((c1, c2) => {
                return c1.baseCard.graded - c2.baseCard.graded
            })
        if (list.length <= 0) {
            return;
        }
        this.showLog(flipFlop)
        for (let i = 0; i < this.isGold ? 2 : 1; i++) {
            const baseCardObj = list[i];
            if (!baseCardObj) {
                return
            }
            // todo 金色加成永久需要记录
            baseCardObj.baseCard.isGold = true
        }
    }


    descriptionStr() {
        if (this.isGold) {
            return "<b>战斗开始时：</b>使你等级最低的两个随从<i>（福禄神龙玉珑除外）</i>变为金色。"
        }
        return "<b>战斗开始时：</b> 使你等级最低的随从<i>（福禄神龙玉珑除外）</i>变为金色。"
    }
}
