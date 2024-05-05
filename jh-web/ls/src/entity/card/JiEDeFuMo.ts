import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class JiEDeFuMo extends BaseCard {
    name = "饥饿的蝠魔"
    ethnicity = ["恶魔"]
    attack = 8
    life = 5
    graded = 6
    description = "在你的回合结束时，你的恶魔各吞食酒馆中的一个随从，获取其属性值。"
    // todo 回合结束
}
