import {describe,  it} from "vitest";


describe('CardStorage', () => {
    const version="V29_4_2_199503"
    it('自动生成卡牌代码', function () {
        const s = "DiYaBoLuoKongJuZhiWang.ts\n" +
            "DuoLuoZheXinShi.ts\n" +
            "HouTaiBaoAn.ts\n" +
            "JiaMaoGuiLei.ts\n" +
            "JiaoHuaDeALanNaSi.ts\n" +
            "JiEDeMoFu.ts\n" +
            "JiErLiKe.ts\n" +
            "JiShiTanFan.ts\n" +
            "LingHunHuiSuZhe.ts\n" +
            "PiaoFuGuanChaZhe.ts\n" +
            "SaGeLaSiDeYongShi.ts\n" +
            "TanShiDeWuZuEr.ts\n" +
            "TiaoShiMoQuan.ts\n" +
            "TiKeDiAoSi.ts\n" +
            "WuDaoWangZiMaKeZhaEr.ts\n" +
            "XinLingNiMo.ts\n" +
            "ZaoDongQiZhaZhe.ts";
        const list = s.split("\n").filter(cardName => {
            cardName=cardName.trim()
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
            console.log(`import ${cardName} from "./${cardName}.ts";`)
        })
        list.forEach(cardName=>{
            console.log(`CardStorage.set("${cardName}", ${cardName});`)
        })
    });
})
