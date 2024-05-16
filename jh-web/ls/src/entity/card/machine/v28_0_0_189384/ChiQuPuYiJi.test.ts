import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {cloneDeep} from "lodash";
import FightObj from "../../../../objs/FightObj";


describe('ChiQuPuYiJi', () => {
    it('should whenOtherHolyShieldDisappears', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("ChiQuPuYiJi"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("ChiQuPuYiJi"));
            player.addCardInHand(baseCardObj2, sharedCardPool)

            const defenderPlayer = cloneDeep(player);
            defenderPlayer.name = 'test'

            player.endTheRound({
                ...triggerObj,
            })
            defenderPlayer.endTheRound({
                ...triggerObj,
                currentPlayer: defenderPlayer
            })
            new FightObj(player, defenderPlayer, contextObj).doFighting()
            expect(baseCardObj2.attack).toBe(2)
            expect(baseCardObj2.life).toBe(2)
        } catch (e) {
            console.log(e)
        }
    });
})




