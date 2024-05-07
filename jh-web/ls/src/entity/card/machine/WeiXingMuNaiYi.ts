import BaseCard from "../../baseCard";

export default class WeiXingMuNaiYi extends BaseCard {
    name = "微型木乃伊"
    ethnicity = ["机械", "亡灵"]
    attack = 1
    life = 2
    graded = 1
    description = "复生在你的回合结束是，随机使另一个友方随从获得+1攻击力"
    isRebirth: boolean = true;
}

