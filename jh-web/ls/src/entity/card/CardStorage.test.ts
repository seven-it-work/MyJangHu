import {describe, expect, it} from "vitest";


describe('CardStorage', () => {
    it('自动生成卡牌代码', function () {
        const dir=""
        const s = "BaoBaoJiQiRen.ts\n" +
            "BaoFeiFeiPinHuiShouJi.ts\n" +
            "CardStorageMachine.ts\n" +
            "ChaoChaoJiQiRen.ts\n" +
            "ChaoChaoMoZu.ts\n" +
            "ChiQuPuYiJi.ts\n" +
            "CuiMianJiQiRen.ts\n" +
            "DuoMianFuZhuWuRenJi.ts\n" +
            "JiXiangMaJu.ts\n" +
            "JiXieMuMa.ts\n" +
            "JiXieXiaoMa.ts\n" +
            "JiXingB_BOXQuanShou.ts\n" +
            "KanGeErDeXueTu.ts\n" +
            "LiangChanXingKongHeJi.ts\n" +
            "OuMiQiePoHuaiZhe.ts\n" +
            "PengPengFeiChe.ts\n" +
            "PianZheJiQiRen.ts\n" +
            "ShouFengQinJiQiRen.ts\n" +
            "SiShen4000Xing.ts\n" +
            "WeiXingJiQiRen.ts\n" +
            "WeiXingMuNaiYi.ts\n" +
            "ZiShiYingLuZhang.ts";
        const list = s.split("\n").filter(cardName => {
            if (cardName.includes("test.ts")) {
                // 忽略
                return false
            } else if (cardName.includes(".ts")) {
                return true
            } else {
                return false
            }
        }).map(cardName => {
            return cardName.split(".ts")[0];
        })
        list.forEach(cardName=>{
            console.log(`import ${cardName} from "./${dir}/${cardName}";`)
        })
        list.forEach(cardName=>{
            console.log(`CardStorage.set(${cardName}.name, ${cardName});`)
        })
    });
})
