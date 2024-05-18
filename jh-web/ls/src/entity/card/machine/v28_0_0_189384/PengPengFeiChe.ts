import BaseCard from "../../../baseCard";

export default class PengPengFeiCheV28 extends BaseCard {
    name = "砰砰飞车"
    ethnicity = ["机械"]
    attack = 12
    life = 12
    graded = 7
    descriptionStr(){return "<div><b>磁力</b></div>复生。圣盾。<b>嘲讽</b>。风怒。"}
    isMockery: boolean = true;
    // 是否有圣盾
    isHolyShield: boolean = true;
    // 是否复生
    isRebirth: boolean = true;
    numberAttack = 2;
    isMagneticForce = true;
}
