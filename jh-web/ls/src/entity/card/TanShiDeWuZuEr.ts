import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class TanShiDeWuZuEr extends BaseCard {
    name = "贪食的乌祖尔"
    ethnicity = ["恶魔"]
    attack = 4
    life = 6
    graded = 5
    description = "嘲讽。在你使用一张恶魔牌后，吞食酒馆中的一个随从，获取其属性值。"
    isMockery = true;
    // todo 牌使用监听
}
