import {describe, it, expect,} from 'vitest';
import ContextObj from "../../objs/ContextObj";
import Player from "../../objs/Player";
import BaseCardObj from "../../objs/BaseCardObj";
import XieNengYuanSu from "./XieNengYuanSu";
import Taverns from "../../objs/Taverns";
import FenNuBianZhiZhe from "./FenNuBianZhiZhe";


describe('FenNuBianZhiZhe', () => {
    it('should whenOtherCardUsedTrigger', function () {
        try {
            const contextObj = new ContextObj();
            var taverns = new Taverns();
            contextObj.player = new Player(taverns);
            contextObj.player.currentGoldCoin = 999;
            contextObj.player.currentLife = 30;
            var baseCardObj = new BaseCardObj(new FenNuBianZhiZhe());
            contextObj.player.buyCard(baseCardObj, contextObj)
            var baseCardObj1 = new BaseCardObj(new XieNengYuanSu());
            contextObj.player.buyCard(baseCardObj1, contextObj)

            contextObj.player.useCard(baseCardObj, contextObj)
            contextObj.player.useCard(baseCardObj1, contextObj)

            expect(contextObj.player.currentLife).toBe(29)
            expect(baseCardObj.attack).toBe(5)
            expect(baseCardObj.life).toBe(2)
        } catch (e) {
            console.log(e)
        }
    });
})




