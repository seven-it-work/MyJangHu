import {describe, expect, it} from "vitest";


describe('CardStorage', () => {
    it('自动生成卡牌代码', function () {
        const dir=""
        const s = "FenNuBianZhiZhe.test.ts\n" +
            "FenNuBianZhiZhe.ts\n" +
            "JiEDeFuMo.ts\n" +
            "JiXieJiaLaKeSuSi.ts\n" +
            "JunTuanJianGong.ts\n" +
            "KongJuHuZiWang.ts\n" +
            "LingHunHuiSuZhe.ts\n" +
            "PiaoFuGuanChaZhe.ts\n" +
            "QiGuiDaJiLeShou.ts\n" +
            "SaGeLaSiDeYongShi.ts\n" +
            "TanShiDeWuZuEr.ts\n" +
            "TiaoShiMoQuan.ts\n" +
            "TiKeDiAoSaoSi.ts\n" +
            "WuDaoWangZiMaKeZhaEr.ts\n" +
            "XiaoGui.ts\n" +
            "XiaoGuiQiuTu.test.ts\n" +
            "XiaoGuiQiuTu.ts\n" +
            "XieNengYuanSu.test.ts\n" +
            "XieNengYuanSu.ts\n" +
            "XinLingNiMo.ts\n" +
            "XiongEDeXieNengYouLong.ts\n" +
            "XiXueDiYuQuan.ts\n" +
            "YiJiaoTuSiSeLa.ts\n" +
            "ZaoDongQiZhaZhe.ts";
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
