import {describe, it, expect,} from 'vitest';
import ContextObj from "./ContextObj";
import Player from "./Player";
import BaseCardObj from "./BaseCardObj";
import Taverns from "./Taverns";
import FightObj from "./FightObj";
import SharedCardPool from "./SharedCardPool";
import XiaoGuiQiuTu from "../entity/card/XiaoGuiQiuTu";


export default {};

describe('Fight', () => {
    it("doFighting 平局", () => {
        try {
            const xiaoGuiQiuTu = new XiaoGuiQiuTu();
            const player = new Player(new Taverns());
            player.cardList.push(new BaseCardObj(xiaoGuiQiuTu))
            const sharedCardPool = new SharedCardPool(["恶魔"]);
            const attackerContextObj = new ContextObj(player, sharedCardPool);
            const player1 = new Player(new Taverns());
            player1.cardList.push(new BaseCardObj(xiaoGuiQiuTu))
            const defenderContextObj = new ContextObj(player1, sharedCardPool);

            player.cardListInFighting = player.cardList
            player1.cardListInFighting = player1.cardList
            expect(player1.cardListInFighting[0].baseCard.life).toBe(2)
            expect(player1.cardListInFighting[0].baseCard.name).toBe('小鬼囚徒')
            const fight = new FightObj(attackerContextObj, defenderContextObj);
            fight.doFighting()
            expect(player1.cardListInFighting.length).toBe(0)
        } catch (e) {
            console.log(e)
        }
    })
    it("doFighting player 胜利", () => {
        try {
            const xiaoGuiQiuTu = new XiaoGuiQiuTu();
            const player = new Player(new Taverns());
            const baseCardObj = new BaseCardObj(xiaoGuiQiuTu);
            baseCardObj.baseCard.life = 10;
            player.cardList.push(baseCardObj)
            const sharedCardPool = new SharedCardPool(["恶魔"]);
            const attackerContextObj = new ContextObj(player, sharedCardPool);
            const player1 = new Player(new Taverns());
            player1.cardList.push(new BaseCardObj(xiaoGuiQiuTu))
            const defenderContextObj = new ContextObj(player1, sharedCardPool);

            player.cardListInFighting = player.cardList
            player1.cardListInFighting = player1.cardList
            expect(player.cardListInFighting[0].baseCard.life).toBe(10)
            expect(player.cardListInFighting[0].baseCard.name).toBe('小鬼囚徒')
            const fight = new FightObj(attackerContextObj, defenderContextObj);
            fight.doFighting()
            expect(player.cardListInFighting[0].baseCard.life).toBe(6)
            expect(player.cardListInFighting[0].baseCard.name).toBe('小鬼囚徒')
            expect(player1.cardListInFighting.length).toBe(0)
            expect(player.currentLife).toBe(30)
            expect(player1.currentLife).toBe(29)
        } catch (e) {
            console.log(e)
        }
    })
});
