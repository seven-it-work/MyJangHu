import {describe, it, expect,} from 'vitest';
import ContextObj from "../../objs/ContextObj";
import Player from "../../objs/Player";
import BaseCardObj from "../../objs/BaseCardObj";
import XieNengYuanSu from "./XieNengYuanSu";
import Taverns from "../../objs/Taverns";
import FenNuBianZhiZhe from "./FenNuBianZhiZhe";
import XiaoGuiQiuTu from "./XiaoGuiQiuTu";
import SharedCardPool from "../../objs/SharedCardPool";


describe('XiaoGuiQiuTu', () => {
    it('should whenDeadTrigger', function () {
        try {
            var player = new Player(new Taverns());
            var contextObj = new ContextObj(player, new SharedCardPool(["恶魔"]));
            var xiaoGuiQiuTu = new XiaoGuiQiuTu();
            xiaoGuiQiuTu.whenDeadTrigger(contextObj)
            var baseCardObj = player.cardListInFighting[0];
            expect(baseCardObj?.baseCard?.constructor.name).toBe("XiaoGui")
        } catch (e) {
            console.log(e)
        }
    });
})




