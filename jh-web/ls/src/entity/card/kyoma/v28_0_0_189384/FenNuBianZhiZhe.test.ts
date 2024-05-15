import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";


describe('FenNuBianZhiZhe', () => {
    it('should whenOtherCardUsedTrigger', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("FenNuBianZhiZhe"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})

            expect(baseCardObj1.life).toBe(1)
            expect(baseCardObj1.attack).toBe(3)

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("JiEDeFuMo"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})
            expect(baseCardObj1.life).toBe(2)
            expect(baseCardObj1.attack).toBe(5)
        } catch (e) {
            console.log(e)
        }
    });
})




