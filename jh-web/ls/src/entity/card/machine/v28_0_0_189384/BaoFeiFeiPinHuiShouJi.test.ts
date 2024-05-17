import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";
import FightObj from "../../../../objs/FightObj";
import {cloneDeep} from "lodash";


describe('BaoFeiFeiPinHuiShouJi', () => {
    it('should whenEndRound', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            player.tavern.graded = 6
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj3 = new BaseCardObj(sharedCardPool.getByName("BaoFeiFeiPinHuiShouJi"));
            player.addCardInHand(baseCardObj3, sharedCardPool)
            player.useCard(baseCardObj3, undefined, {...triggerObj, currentCard: baseCardObj3})

            player.endTheRound({
                ...triggerObj,
            })
            contextObj.currentRound++;

            player.endTheRound({
                ...triggerObj,
            })
            contextObj.currentRound++;

            player.endTheRound({
                ...triggerObj,
            })
            contextObj.currentRound++;
            // 获取到了
            expect(player.handCardList.length).toBe(1)

            player.endTheRound({
                ...triggerObj,
            })
            contextObj.currentRound++;

            player.endTheRound({
                ...triggerObj,
            })
            contextObj.currentRound++;

            player.endTheRound({
                ...triggerObj,
            })
            contextObj.currentRound++;
            // 获取到了
            expect(player.handCardList.length).toBe(2)
        } catch (e) {
            console.log(e)
        }
    });
})




