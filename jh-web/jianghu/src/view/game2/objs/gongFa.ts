import {PlayerObj} from "@/view/game2/objs/playerObj";
import {randomList} from "@/random";
import Status from "@/view/game2/objs/status";

export default class GongFa {
    key: string;
    name: string;
    description: string;

    doSomething(players: PlayerObj[], targets: PlayerObj[]) {
    }
}

export class JiuYangZhenJing extends GongFa {
    key = "JiuYangZhenJing"
    name = "九阳真经"
    description = "恢复已方随机一个伙伴的最大生命值的30%，并清理其所有负面状态"

    doSomething(players: PlayerObj[], targets: PlayerObj[]) {
        const randomForm: PlayerObj = randomList.randomFormList(players);
        if (randomForm) {
            randomForm.restoresHealth(randomForm.getMaxHp() * 0.3)
            randomForm.cleanNegativeStatus();
        }
    }
}

export class YiJinJing extends GongFa {
    key = "YiJinJing"
    name = "易筋经"
    description = "使随机一个伙伴下个回合提升自身防御力40%，攻击力20%"

    doSomething(players: PlayerObj[], targets: PlayerObj[]) {
        const randomForm: PlayerObj = randomList.randomFormList(players);
        if (randomForm) {
            const def = new Status(1);
            def.type = "Def"
            def.intensity = 0.4
            def.name = "防御提升"
            randomForm.addStatus(def)
            const status = new Status(1);
            status.type = "Atk"
            status.intensity = 0.2
            status.name = "攻击提升"
            randomForm.addStatus(status)
        }
    }
}
