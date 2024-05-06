import BaseCard from "../baseCard";
import ContextObj from "../../objs/ContextObj";

export default class LingHunHuiSuZhe extends BaseCard {
    name = "灵魂回溯者"
    ethnicity = ["恶魔"]
    attack = 3
    life = 1
    graded = 2
    description = "在你的英雄受到伤害后，回溯该伤害并使本随从获取+1生命值"

    whenPlayerInjuries(injuring: number, context: ContextObj) {
        // 只有回合中，英雄受伤才行
        if (!context.player.isEndRound) {
            // 伤害回溯，问题？护甲能回溯吗，回溯到护甲上吗？满血回溯到哪里，有护甲生命值没有满的问题
            context.player.changeLife(injuring, context)
            this.life = this.life + 1;
        }
    }
}
