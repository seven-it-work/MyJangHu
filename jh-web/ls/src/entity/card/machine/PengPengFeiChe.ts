import BaseCard from "../../baseCard";

export default class PengPengFeiChe extends BaseCard {
    name = "砰砰飞车"
    ethnicity = ["机械"]
    attack = 12
    life = 12
    graded = 7
    description = "磁力复生。圣盾。嘲讽。风怒。"
    isMockery: boolean = true;
    // 是否有圣盾
    isHolyShield: boolean = true;
    // 是否复生
    isRebirth: boolean = true;
    // todo 风怒 磁力
}

