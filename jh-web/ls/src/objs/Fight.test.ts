import {describe, it, expect,} from 'vitest';
import ContextObj from "./ContextObj";
import Player from "./Player";
import BaseCardObj from "./BaseCardObj";
import XieNengYuanSu from "../entity/card/XieNengYuanSu";
import Taverns from "./Taverns";
import Fight from "./Fight";
import SharedCardPool from "./SharedCardPool";
import XiaoGuiQiuTu from "../entity/card/XiaoGuiQiuTu";




export default {};

describe('Fight', () => {
    it("doFighting", () => {
        try {
            var sharedCardPool = new SharedCardPool(["恶魔"]);


            var player = new Player(new Taverns());
            player.cardList.push(new BaseCardObj(sharedCardPool.getByName("XiaoGuiQiuTu")))
            var attackerContextObj = new ContextObj(player, sharedCardPool);
            var player1 = new Player(new Taverns());
            player1.cardList.push(new BaseCardObj(xiaoGuiQiuTu))
            var defenderContextObj = new ContextObj(player1, sharedCardPool);

            player.cardListInFighting = player.cardList
            player1.cardListInFighting = player1.cardList
            console.log(player1.cardListInFighting[0].baseCard.life)
            var fight = new Fight(attackerContextObj, defenderContextObj);
            fight.doFighting()
            console.log(player1.cardListInFighting[0].baseCard.life)
        } catch (e) {
            console.log(e)
        }
    })
});
