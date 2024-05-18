import {describe, it, expect,} from 'vitest';
import Player from "../../../../objs/Player";
import Taverns from "../../../../objs/Taverns";
import SharedCardPool from "../../../../objs/SharedCardPool";
import ContextObj from "../../../../objs/ContextObj";
import BaseCardObj from "../../../../objs/BaseCardObj";
import {cloneDeep} from "lodash";
import FightObj from "../../../../objs/FightObj";


describe('JiXingB_BOXQuanShou', () => {
    it('should whenOtherCardMagneticAdd', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("JiXingB_BOXQuanShou"));
            player.addCardInHand(baseCardObj1, sharedCardPool)
            player.useCard(baseCardObj1, undefined, {...triggerObj, currentCard: baseCardObj1})

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("JiXingB_BOXQuanShou"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})

            const baseCardObj3 = new BaseCardObj(sharedCardPool.getByName("CuiMianJiQiRen"));
            player.addCardInHand(baseCardObj3, sharedCardPool)
            player.useCard(baseCardObj3, baseCardObj1, {...triggerObj, currentCard: baseCardObj3})

            expect(baseCardObj1.baseCard.magneticForceList.length).toBe(1)
            expect(baseCardObj2.baseCard.magneticForceList.length).toBe(1)
        } catch (e) {
            console.log(e)
        }
    });
})




