import {describe, it, expect} from 'vitest';
import {SceneObj} from "@/core/entity/SceneObj";


describe('场景测试', () => {
    it('should 生产灵力', function () {
        // @ts-ignore
        var sceneObj = new SceneObj();
        sceneObj.currentLingLiValue = 0
        const before = sceneObj.currentLingLiValue
        try {
            for (let i = 0; i < 100; i++) {
                sceneObj.doSomething(null)
            }
        } catch (e) {
            console.log(e)
        }
        expect(sceneObj.currentLingLiValue > before).toBe(true)
    });
})
