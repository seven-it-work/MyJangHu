import {describe, it, expect,} from 'vitest';
import FightObj from "./FightObj";
import {shuffle} from "lodash";


describe('Fight', () => {
    it("test array sort", () => {
        try {
            let index = []
            for (let i = 0; i < 8; i++) {
                index.push(i);
            }
            index=shuffle(index)
            console.log(index)
        } catch (e) {
            console.log(e)
        }
    })
});
