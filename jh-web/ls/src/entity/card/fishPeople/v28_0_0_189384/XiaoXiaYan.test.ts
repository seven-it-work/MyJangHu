import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";
import FightObj from "../../../../objs/FightObj";
import {cloneDeep} from "lodash";
import randomUtil from "../../../../utils/RandomUtils";


describe('XiaoXiaYan', () => {
    it('should pick2', function () {
        const pick = randomUtil.pick([1], 2);
        console.log(pick[0])
        console.log(pick[1])
    });
    it('should whenEndRound', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj3 = new BaseCardObj(sharedCardPool.getByName("BaiGeErGeGuoWang"));
            player.addCardInHand(baseCardObj3, sharedCardPool)
            player.useCard(baseCardObj3, undefined, {...triggerObj, currentCard: baseCardObj3})

            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("XiaoXiaYan"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})


            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("ManYuChiHou"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})



            player.endTheRound({
                ...triggerObj,
            })
            expect(baseCardObj1.life).toBe(1)
            expect(player.handCardList.length).toBe(1)
        } catch (e) {
            console.log(e)
        }
    });
})




