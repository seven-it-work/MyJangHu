import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";
import FightObj from "../../../../objs/FightObj";
import {cloneDeep} from "lodash";


describe('XiongEDeMiShiZhe', () => {
    it('should whenStartFightingTrigger', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
                const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("TaDe"));
                player.addCardInHand(baseCardObj1, sharedCardPool)

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("XiongEDeMiShiZhe"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})


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

            expect(baseCardObj1.attack).toBe(4)
            expect(baseCardObj1.life).toBe(4)
        } catch (e) {
            console.log(e)
        }
    });
})




