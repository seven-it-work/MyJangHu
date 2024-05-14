import {describe, it, expect,} from 'vitest';
import Player from "../../../objs/Player";
import Taverns from "../../../objs/Taverns";
import SharedCardPool from "../../../objs/SharedCardPool";
import ContextObj from "../../../objs/ContextObj";
import BaseCardObj from "../../../objs/BaseCardObj";
import FightObj from "../../../objs/FightObj";
import {cloneDeep} from "lodash";


describe('HeChangYuRen', () => {
    it('should whenStartFightingTrigger', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("HeChangYuRen"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})
            // 给他嘲讽
            baseCardObj1.baseCard.isMockery = true

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("CuXinDeTunJiZhe"));
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
        } catch (e) {
            console.log(e)
        }
    });
})




