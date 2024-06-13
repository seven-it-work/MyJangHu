// 将seven替换为路径
import BaseCard from "../../../../baseCard.ts";
import {TriggerObj} from "../../../../Trigger";
import {FlipFlop} from "../../../../FlipFlop";

;

/**
 * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_524_battlegroundsImage.png
 */
export default class WuDaoWangZiMaKeZhaErV29_4_2_199503 extends BaseCard {
    name = "舞蹈王子玛克扎尔"
    ethnicity = ["恶魔"]
    attack = 4
    life = 3
    graded = 3
    cardType = "minion"
    // 剩余刷新消耗生命值次数
    remainRefreshTimes: number = 2;

    beginRound = true

    whenTheRoundBegin(flipFlop: FlipFlop) {
        const magnification = this.isGold ? 2 : 1;
        this.remainRefreshTimes = 2 * magnification;
    }

    protected sanLianInit() {
        this.remainRefreshTimes = this.isGold ? 4 : 2
    }

    descriptionStr() {
        if (this.isGold) {
            return `每回合中， 有4次<b>刷新</b>会消耗生命值，而非铸币。<i>（还剩${this.remainRefreshTimes}次！）</i>`
        }
        return `每回合中， 有2次<b>刷新</b>会消耗生命值，而非铸币。<i>（还剩${this.remainRefreshTimes}次！）</i>`
    }
}
