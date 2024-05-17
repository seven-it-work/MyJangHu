import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {cloneDeep} from "lodash";
import FightObj from "../../../../objs/FightObj";


describe('CuiMianJiQiRenV28', () => {
    it('should whenEndRound', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("CuiMianJiQiRen"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("CuiMianJiQiRen"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, baseCardObj1, {...triggerObj, currentCard: baseCardObj2})

            expect(baseCardObj1.attack).toBe(4)
            expect(baseCardObj1.baseCard.magneticForceList.length).toBe(1)
            expect(baseCardObj2.attack).toBe(2)

            expect(player.cardList.length).toBe(1)
            player.endTheRound({
                ...triggerObj,
            })
            expect(baseCardObj1.attack).toBe(6)
        } catch (e) {
            console.log(e)
        }
    });
})




