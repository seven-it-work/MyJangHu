// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {TriggerObj} from "../../../../Trigger";
import {FlipFlop} from "../../../../FlipFlop";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_905_battlegroundsImage.png
 */
export default class JiShiTanFanV29_4_2_199503 extends BaseCard {
    name = "集市摊贩"
    ethnicity = ["恶魔"]
    attack = 2
    life = 4
    graded = 4
    cardType = "minion"
    buySpellByLifeTimes: number = this.isGold ? 2 : 1;
    remainBuySpellByLifeTimes: number = 1;


    descriptionStr() {
        if (this.isGold) {
            return `每回合中，有2张酒馆法术牌可用生命值购买，而非铸币。<i>（还剩${this.remainBuySpellByLifeTimes}张！）</i>`
        }
        return `每回合中，有1张酒馆法术牌可用生命值购买，而非铸币。<i>（还剩${this.remainBuySpellByLifeTimes}张！）</i>`
    }

    beginRound = true

    whenTheRoundBegin(flipFlop: FlipFlop) {
        this.buySpellByLifeTimes = this.isGold ? 2 : 1;
        this.remainBuySpellByLifeTimes = this.buySpellByLifeTimes;
    }
}
