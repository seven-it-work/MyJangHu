import {describe, it, expect,} from 'vitest';
import BaseCardObj from "../../../../objs/BaseCardObj.ts";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";


describe('XieNengYuanSu', () => {
    it('XieNengYuawhenCardUsedTriggernSu', () => {
        const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
        const contextObj = new ContextObj(sharedCardPool);
        const player = new Player('player', new Taverns());
        const triggerObj = {
            contextObj: contextObj,
            currentPlayer: player
        };
        const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("XieNengYuanSu"));
        player.addCardInHand(baseCardObj1, sharedCardPool)
        player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})


        const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("XieNengYuanSu"));
        player.currentGoldCoin=99;
        player.buyCard(baseCardObj2,contextObj)

        expect(baseCardObj2.attack).toBe(4)
        expect(baseCardObj2.life).toBe(2)
    });
})




