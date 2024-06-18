import {describe,  it} from "vitest";


describe('CardStorage', () => {
    const version="V29_4_2_199503"
    it('自动生成卡牌代码', function () {
        const s = "AnBiaoJueShiYueShou.ts\n" +
            "BaoLieBangGeGuShou.ts\n" +
            "BaoShiZouSiShang.ts\n" +
            "CardStorageQuilboar.ts\n" +
            "ChiDunDeCiZong.ts\n" +
            "CiTouChuiDiRen.ts\n" +
            "DaFangDeDiBuShi.ts\n" +
            "DiBuDaShiLuGuGe.ts\n" +
            "HaoJiaoSiJi.ts\n" +
            "JianYaYeZhuRen.ts\n" +
            "KaErJia.ts\n" +
            "KangQiYeZhuRen.ts\n" +
            "LiangBiaoDeYouKe.ts\n" +
            "TiDaoZhaoZeDiBuShi.ts\n" +
            "XianXueYongShi.ts\n" +
            "XieNengYeZhuRen.ts\n" +
            "ZhaCiZhuTou.ts\n" +
            "ZhongShangDeQiangDao.ts\n" +
            "ZuoQuZongShi.ts";
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
