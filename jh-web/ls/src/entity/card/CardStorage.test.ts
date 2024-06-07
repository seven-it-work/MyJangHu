import {describe,  it} from "vitest";


describe('CardStorage', () => {
    const version="V29_4_2_199503"
    it('自动生成卡牌代码', function () {
        const s = "BaiGeErGeGuoWang.ts\n" +
            "BenBoErBa.ts\n" +
            "CaiKuaiYuRen.ts\n" +
            "CardStorageMurloc.ts\n" +
            "ChaoXiXianZhiMoGeEr.ts\n" +
            "CuXinDeTunJiZhe.ts\n" +
            "DiYinTiQinYuRen.ts\n" +
            "FuChuShiZhang.ts\n" +
            "GeJuYiShuJia.ts\n" +
            "HanGuangXianZhi.ts\n" +
            "HeChangYuRen.ts\n" +
            "JuEDongQiYuRen.ts\n" +
            "ManYuChiHou.ts\n" +
            "RongYanYuRen.ts\n" +
            "ShanQiYuYanZhe.ts\n" +
            "ShiTangLieRen.ts\n" +
            "TaDe.ts\n" +
            "TanTuTiaoTiaoYu.ts\n" +
            "XiaoXiaYan.ts\n" +
            "XiongEDeMiShiZhe.ts\n" +
            "XunBaoYuRen.ts\n" +
            "YouGe_SaLongShiZhanZhe.ts\n" +
            "ZhaoZeQianFeng.ts";
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
