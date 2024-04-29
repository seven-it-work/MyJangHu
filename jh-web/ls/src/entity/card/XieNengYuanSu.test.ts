import {describe, it, expect,} from 'vitest';
import ContextObj from "../../objs/ContextObj";
import Player from "../../objs/Player";
import BaseCardObj from "../../objs/BaseCardObj";
import XieNengYuanSu from "./XieNengYuanSu";


describe('useStorage', () => {
    it('useStorage get Methods', () => {
        const contextObj = new ContextObj();
        contextObj.player = new Player();

        const baseCardObj = new BaseCardObj(new XieNengYuanSu());
        baseCardObj.whenCardUsedTrigger(contextObj);
        expect(contextObj.player.tavern.tavernAttackBonus).toBe(1)
        expect(contextObj.player.tavern.tavernLifeBonus).toBe(1)
    });
    it('XieNengYuanSu', () => {
        expect(XieNengYuanSu.name).toBe('XieNengYuanSu')
    });
})




