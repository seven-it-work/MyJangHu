import {describe, it, expect,} from 'vitest';
import Player from "../../../objs/Player";
import Taverns from "../../../objs/Taverns";
import SharedCardPool from "../../../objs/SharedCardPool";
import ContextObj from "../../../objs/ContextObj";
import BaseCardObj from "../../../objs/BaseCardObj";
import FightObj from "../../../objs/FightObj";
import {cloneDeep} from "lodash";


describe('DiDiaoTiQinYuRen', () => {
    it('should whenDeadTrigger 场地存在空位', function () {
        try {
            const sharedCardPool = new SharedCardPool(['恶魔', '机械', '鱼人']);
            const contextObj = new ContextObj(sharedCardPool);
            const player = new Player('player', new Taverns());
            const triggerObj = {
                contextObj: contextObj,
                currentPlayer: player
            };
            const baseCardObj1 = new BaseCardObj(sharedCardPool.getByName("CuXinDeTunJiZhe"));
            player.addCardInHand(baseCardObj1, sharedCardPool)

            const baseCardObj2 = new BaseCardObj(sharedCardPool.getByName("DiDiaoTiQinYuRen"));
            player.addCardInHand(baseCardObj2, sharedCardPool)
            player.useCard(baseCardObj2, undefined, {...triggerObj, currentCard: baseCardObj2})
            const defenderPlayer = cloneDeep(player);
            defenderPlayer.name = 'test'
            new FightObj(player, defenderPlayer, contextObj).doFighting()
        } catch (e) {
            console.log(e)
        }
    });
})




