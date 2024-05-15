import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";


describe('BaiGeErGeGuoWang', () => {
    it('should whenCardUsedTrigger', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('test', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("BaiGeErGeGuoWang"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})
            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("BaiGeErGeGuoWang"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})
            expect(player.cardList.length).toBe(2)
            expect(baseCardObj2.attack).toBe(6)
            expect(baseCardObj2.life).toBe(4)
            expect(baseCardObj1.attack).toBe(8)
            expect(baseCardObj1.life).toBe(7)
        } catch (e) {
            console.log(e)
        }
    });
})




