import {describe, it, expect,} from 'vitest';
import ContextObj from "./ContextObj";
import Player from "./Player";
import BaseCardObj from "./BaseCardObj";
import XieNengYuanSu from "../entity/card/XieNengYuanSu";
import Taverns from "./Taverns";
import {groupBy} from "lodash";
import CardDb from "../entity/CardDb";
import SharedCardPool from "./SharedCardPool";


describe('player', () => {
    it('test groupBy', () => {
        try {
            const cardListMap = groupBy([{name: "1"}, {name: "2"}, {name: "1"}], (card) => card.name);
            const handCardListMap = groupBy([{name: "2"}, {name: "1"}], (card) => card.name);
            const merges = new Map<string, Object>();
            for (let dataKey in cardListMap) {
                const merge = merges[dataKey] || [];
                merge.push(...cardListMap[dataKey]);
                merges[dataKey] = merge;
            }
            for (let dataKey in handCardListMap) {
                const merge = merges[dataKey] || [];
                merge.push(...cardListMap[dataKey]);
                merges[dataKey] = merge;
            }
            console.log(merges)
        } catch (e) {
            console.log(e)
        }
    });
    it('addCardInHand 三连 来着手牌', () => {
        try {
            const cardDb = new CardDb();
            const player = new Player("test", new Taverns());
            player.addCardInHand(new BaseCardObj(cardDb.getByName("ZaoDongQiZhaZhe")))
            player.addCardInHand(new BaseCardObj(cardDb.getByName("ZaoDongQiZhaZhe")))
            player.addCardInHand(new BaseCardObj(cardDb.getByName("ZaoDongQiZhaZhe")))
            player.addCardInHand(new BaseCardObj(cardDb.getByName("ZaoDongQiZhaZhe")))
        } catch (e) {
            console.log(e)
        }
    });
    it('addCardInHand 三连 2张来着战场，1张来着手牌', () => {
        try {
            const cardDb = new CardDb();
            const player = new Player("test", new Taverns());
            player.addCard(new BaseCardObj(cardDb.getByName("ZaoDongQiZhaZhe")), {contextObj: new ContextObj(new SharedCardPool([]))});
            player.addCard(new BaseCardObj(cardDb.getByName("ZaoDongQiZhaZhe")), {contextObj: new ContextObj(new SharedCardPool([]))});
            player.addCardInHand(new BaseCardObj(cardDb.getByName("ZaoDongQiZhaZhe")))
        } catch (e) {
            console.log(e)
        }
    });
})




