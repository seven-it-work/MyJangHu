import {describe,  it} from "vitest";


describe('CardStorage', () => {
    const version="V29_4_2_199503"
    it('自动生成卡牌代码', function () {
        const s = "AoJiaoTieNiu.ts\n" +
            "BaoBaoBao.ts\n" +
            "BaZhuaJuGuaiDeChuShou.ts\n" +
            "BaZhuaJuGuaiShuoChangJuanWang.ts\n" +
            "BianChiZheTeLiGaoLei.ts\n" +
            "BingHaoQiangLiMengLang.ts\n" +
            "CardStorageBeast.ts\n" +
            "DaQianXie.ts\n" +
            "EnZuoSiDeYu.ts\n" +
            "EZuMaTeDeChuXu.ts\n" +
            "FengKuangDeHouZi.ts\n" +
            "HengMingFengNiao.ts\n" +
            "HuoBaoXiongJi.ts\n" +
            "JiaChong.ts\n" +
            "JianJiaoJiuXing.ts\n" +
            "JiBianJiaChong.ts\n" +
            "JinKeGuWeiGui.ts\n" +
            "JiXieMaJu.ts\n" +
            "JiXieMuMa.ts\n" +
            "JiXieXiaoMa.ts\n" +
            "JuDaDeJinGangYingWu.ts\n" +
            "JuLangGeDeLin.ts\n" +
            "KeDuoShouBaoBao.ts\n" +
            "KuanHouDeTuoLu.ts\n" +
            "MoRenBao.ts\n" +
            "NuHuoFeiYang.ts\n" +
            "ShaYuEr.ts\n" +
            "TaMuZuo.ts\n" +
            "WaSheng.ts\n" +
            "WeiWuZhanJuMaiKeSiWei.ts\n" +
            "XiongBaBa.ts\n" +
            "XiongMaMa.ts\n" +
            "XuanCaiZhuoTianZhe.ts\n" +
            "YinSenJuMang.ts\n" +
            "YinYuBaiE.ts\n" +
            "YinYuChuE.ts\n" +
            "YiZhongZuanDiChong.ts\n" +
            "YouLingZhongQuan.ts\n" +
            "YouNianLeiXiang.ts\n" +
            "ZhongJinShuShuangTouFeiLong.ts";
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
