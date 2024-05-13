import {describe, expect, it} from "vitest";


describe('CardStorage', () => {
    it('自动生成卡牌代码', function () {
        const dir="fishPeople"
        const s = "BaiGeErGeGuoWang.ts\n" +
            "ChaoXiXianZhiMoGeEr.ts\n" +
            "CuXinDeTunJiZhe.ts\n" +
            "DiDiaoTiQinYuRen.ts\n" +
            "GeJuYiShuJia.ts\n" +
            "HeChangYuRen.ts\n" +
            "LieYanFeiYu.ts\n" +
            "ManYuChiHou.ts\n" +
            "MoLaKeLiSi.ts\n" +
            "NanChanDeShiShiYuRen.ts\n" +
            "ShiTangLieRen.ts\n" +
            "TaDe.ts\n" +
            "XiaoXiaYan.ts\n" +
            "XieQiDaoHangYuan.ts\n" +
            "XiongEDeMiShiZhe.ts\n" +
            "XunBaoYuRen.ts\n" +
            "ZaiKuaiYuRen.ts\n" +
            "ZhaoZeQianFeng.ts";
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
