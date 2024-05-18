import BaseCard from "../../../baseCard.ts";

export default class JiaMaoGuiLeiV29 extends BaseCard {
    name = "假冒鬼儡"
    ethnicity = ["恶魔"]
    attack = 1
    life = 2
    graded = 3
    descriptionStr(){return "在你的回合结束时，吞食酒馆中的一个随从以获得其属性值。"}
    version = ["v29.2.0.198037"]
}
