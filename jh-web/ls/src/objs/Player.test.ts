import {describe, it, expect,} from 'vitest';
import ContextObj from "./ContextObj";
import Player from "./Player";
import BaseCardObj from "./BaseCardObj";
import XieNengYuanSu from "../entity/card/XieNengYuanSu";
import Taverns from "./Taverns";


describe('player', () => {
    it('canBuyCard is true', () => {
        const contextObj = new ContextObj();
        contextObj.player = new Player();
        contextObj.player.currentGoldCoin = 9;
        var canBuyCard = contextObj.player.canBuyCard(new BaseCardObj(new XieNengYuanSu()));
        expect(canBuyCard).toBe(true)
    });
    it('canBuyCard is false', () => {
        const contextObj = new ContextObj();
        contextObj.player = new Player();
        contextObj.player.currentGoldCoin = 2;
        var canBuyCard = contextObj.player.canBuyCard(new BaseCardObj(new XieNengYuanSu()));
        expect(canBuyCard).toBe(false)
    });
    it('cardOut is success', () => {
        const contextObj = new ContextObj();
        contextObj.player = new Player();
        contextObj.player.currentGoldCoin = 3;
        const cardObj = new BaseCardObj(new XieNengYuanSu());
        contextObj.player.buyCard(cardObj, contextObj);
        expect(contextObj.player.currentGoldCoin).toBe(0)
        expect(contextObj.player.handCardMap.get(cardObj.id)).toBe(cardObj)
    });
    it('useCard is success', () => {
        const contextObj = new ContextObj();
        contextObj.player = new Player();
        contextObj.player.currentGoldCoin = 3;
        const cardObj = new BaseCardObj(new XieNengYuanSu());
        contextObj.player.buyCard(cardObj, contextObj);
        expect(contextObj.player.currentGoldCoin).toBe(0)
        expect(contextObj.player.handCardMap.get(cardObj.id)).toBe(cardObj)
        expect(contextObj.player.canUseCard(cardObj)).toBe(true)
        contextObj.player.useCard(cardObj, contextObj)
        expect(contextObj.player.cardList.length).toBe(1)
    });
    it('fight test', () => {
        const player1 = new Player(new Taverns());

    });
})



