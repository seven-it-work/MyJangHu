import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";
import FightObj from "../../../../objs/FightObj";
import {cloneDeep} from "lodash";


describe('NanChanDeShiShiYuRen', () => {
    it('should whenOtherDeadTrigger', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            for (let i = 0; i < 2; i++) {
                const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("TaDe"));
                player.addCardInHand(baseCardObj1, sharedCardPool)
                player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})
            }
            for (let i = 0; i < 2; i++) {
                const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("JiXieMuMa"));
                player.addCardInHand(baseCardObj1, sharedCardPool)
                player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})
            }

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("NanChanDeShiShiYuRen"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})
            // 给他潜行
            baseCardObj2.baseCard.isSneak = true

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




