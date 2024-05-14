import {describe, it, expect,} from 'vitest';
import Player from "../../../objs/Player";
import Taverns from "../../../objs/Taverns";
import SharedCardPool from "../../../objs/SharedCardPool";
import ContextObj from "../../../objs/ContextObj";
import BaseCardObj from "../../../objs/BaseCardObj";
import FightObj from "../../../objs/FightObj";
import {cloneDeep} from "lodash";


describe('LieYanFeiYu', () => {
    it('should whenOtherCardUsedTrigger', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("LieYanFeiYu"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})

            const lifeBefore = baseCardObj1.life;
            const attackBefore = baseCardObj1.attack;
            expect(lifeBefore).toBe(3)
            expect(attackBefore).toBe(1)

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("BaiGeErGeGuoWang"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})

            expect(baseCardObj1.life).toBe(lifeBefore+1+3)
            expect(baseCardObj1.attack).toBe(attackBefore+1+2)
        } catch (e) {
            console.log(e)
        }
    });
})




