import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class TiKeDiAoSaoSi extends BaseCard {
    name = "提克迪奥扫斯"
    ethnicity = ["恶魔"]
    attack = 4
    life = 4
    graded = 5
    description = "在你的英雄受到伤害后，使你的其他恶魔获得+1/+1"

    whenPlayerInjuries(injuring: number, context: ContextObj) {
        if (!context.player.isEndRound) {
            context.player.cardList.filter(card => card.id !== this.tempId).forEach(card => {
                card.baseCard.life++;
                card.baseCard.attack++;
            })
        }
    }
}
