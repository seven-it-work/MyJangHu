import BaseCard from "../../../baseCard.ts";

export default class JiShiTanFan extends BaseCard {
    name = "集市摊贩"
    ethnicity = ["恶魔"]
    attack = 2
    life = 4
    graded = 4
    // todo 购买法术牌生命值
    description = "每回合中,有1张酒馆法术牌可以用生命值购买,而非铸币。（还剩1张）"
    version = ["v29.2.0.198037"]
}

