import BaseCard from "../../baseCard";

export default class ZiShiYingLuZhang extends BaseCard {
    name = "自适应路障"
    ethnicity = ["机械"]
    attack = 6
    life = 7
    graded = 5
    description = "<b>嘲讽</b>。每当本随从受到攻击时，都会（尽可能）转换属性值，变为1点生命值以存活下来。"
    // 受到攻击时，将攻击力转换为生命值，转换为对方攻击+1

    // todo 被攻击时
}

