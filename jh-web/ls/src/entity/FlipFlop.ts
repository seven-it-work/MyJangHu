import BaseCardObj from "../objs/BaseCardObj";
import Player from "../objs/Player";
import ContextObj from "../objs/ContextObj";

export const inversion = (flipFlop: FlipFlop): FlipFlop => {
    return new FlipFlop({
        ...flipFlop,
        currentCard: flipFlop.targetCard,
        currentLocation: flipFlop.targetLocation,
        currentPlayer: flipFlop.targetPlayer,
        targetCard: flipFlop.currentCard,
        targetLocation: flipFlop.currentLocation,
        targetPlayer: flipFlop.currentPlayer
    })

}

export interface FlipFlopInterface {
    currentCard: BaseCardObj;
    currentPlayer: Player;
    currentLocation: '手牌' | '战场' | '战斗' | '酒馆'
    targetCard: BaseCardObj;
    targetPlayer: Player;
    targetLocation: '手牌' | '战场' | '战斗' | '酒馆'
    contextObj: ContextObj;
    otherData?: {
        harmed?: number,
        nextCard?: BaseCardObj,
    };
    // 需要选择对象
    needSelectCard?: BaseCardObj;
}

export class FlipFlop implements FlipFlopInterface {


    isCurrentCardIsTargetCard(): boolean {
        return this.currentCard.id === this.targetCard.id
    }


    constructor(data: FlipFlopInterface | undefined) {
        if (data) {
            this.currentCard = data.currentCard
            this.currentPlayer = data.currentPlayer
            this.currentLocation = data.currentLocation
            this.targetCard = data.targetCard
            this.targetPlayer = data.targetPlayer
            this.targetLocation = data.targetLocation
            this.contextObj = data.contextObj
            this.otherData = data.otherData
            this.needSelectCard = data.needSelectCard
        }
    }

    contextObj: ContextObj;
    currentCard: BaseCardObj;
    currentLocation: "手牌" | "战场" | "战斗" | "酒馆";
    currentPlayer: Player;
    needSelectCard?: BaseCardObj;
    otherData?: {
        harmed?: number,
        nextCard?: BaseCardObj,
    } = {};
    targetCard: BaseCardObj;
    targetLocation: "手牌" | "战场" | "战斗" | "酒馆";
    targetPlayer: Player;
}

export interface Triggering {
    /**
     * 战吼
     */
    warRoar(flipFlop: FlipFlop);

    /**
     * 战吼监听
     */
    warRoarHook(flipFlop: FlipFlop);

    /**
     * 亡语
     */
    deadLanguage(flipFlop: FlipFlop);
}

export interface FlipFlopFunc {
    /**
     * 当死亡时
     */
    whenDeath(flipFlop: FlipFlop);

    /**
     * 当攻击时
     */
    whenAttacking(flipFlop: FlipFlop);

    /**
     * 当受伤时
     */
    whenInjured(flipFlop: FlipFlop);

    /**
     * 当玩家受伤时
     */
    whenPlayerInjured(flipFlop: FlipFlop);

    /**
     * 当召唤时
     */
    whenSummoned(flipFlop: FlipFlop);

    /**
     * 当使用时
     */
    whenUsed(flipFlop: FlipFlop);

    /**
     * 当购买时
     */
    whenPurchasing(flipFlop: FlipFlop);

    /**
     * 当被出售时
     */
    whenBeingSold(flipFlop: FlipFlop);

    /**
     * 当战斗开始时
     */
    whenTheBattleBegan(flipFlop: FlipFlop);

    /**
     * 当回合结束时
     */
    whenTheRoundIsOver(flipFlop: FlipFlop);

    /**
     * 当回合开始时
     */
    whenTheRoundBegin(flipFlop: FlipFlop);

    /**
     * 当攻击力增加时（不论永久还是临时）
     * targetCard 影响的来源
     */
    whenIncreasedAttack(flipFlop: FlipFlop);

    /**
     * 当生命值增加时（不论永久还是临时）
     * targetCard 影响的来源
     */
    whenIncreasedLife(flipFlop: FlipFlop);

    /**
     * 法术使用监听
     */
    whenSpellUse(flipFlop: FlipFlop);

    /**
     * 复仇监听器
     */
    whenVengeance(flipFlop: FlipFlop);
}

