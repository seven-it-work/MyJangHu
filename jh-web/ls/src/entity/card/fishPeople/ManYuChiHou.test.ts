import {describe, it, expect,} from 'vitest';
import Player from "../../../objs/Player";
import Taverns from "../../../objs/Taverns";
import SharedCardPool from "../../../objs/SharedCardPool";
import ContextObj from "../../../objs/ContextObj";
import BaseCardObj from "../../../objs/BaseCardObj";
import FightObj from "../../../objs/FightObj";
import {cloneDeep} from "lodash";


describe('ManYuChiHou', () => {
    it('should whenCardUsedTrigger', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("ManYuChiHou"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})
            expect(player.handCardList.length).toBe(0)

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("ManYuChiHou"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})
            expect(player.handCardList.length).toBe(1)
        } catch (e) {
            console.log(e)
        }
    });
})




