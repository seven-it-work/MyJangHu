import {describe, it, expect,} from 'vitest';
import SharedCardPool from "../../../../../objs/SharedCardPool";
import ContextObj from "../../../../../objs/ContextObj";
import Player from "../../../../../objs/Player";
import Taverns from "../../../../../objs/Taverns";
import BaseCardObj from "../../../../../objs/BaseCardObj";
import {cloneDeep} from "lodash";
import FightObj from "../../../../../objs/FightObj";


describe('BaZhuaJuGuaiShuoChangJuanWangV29_4_2_199503', () => {
    it('should whenCardUsedTrigger', function () {
        try {
            const sharedCardPool = new SharedCardPool(['野兽']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('test', new Taverns());

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("BaZhuaJuGuaiShuoChangJuanWang"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, contextObj)

            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("BaZhuaJuGuaiShuoChangJuanWang"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, contextObj)

            const defenderPlayer = cloneDeep(player);
            defenderPlayer.name='defenderPlayer'

            player.endTheRound(contextObj)
            defenderPlayer.endTheRound(contextObj)
            new FightObj(player, defenderPlayer, contextObj).doFighting()

            expect(baseCardObj2.baseCard.counter+baseCardObj1.baseCard.counter).eq(3)
        } catch (e) {
            console.log(e)
        }
    });
})




