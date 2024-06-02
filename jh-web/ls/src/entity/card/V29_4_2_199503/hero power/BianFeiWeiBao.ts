
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_075_battlegroundsImage.png
      */
      export default class BianFeiWeiBao extends BaseCard {
         name = "变废为宝"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "移除一个友方随从，<b>发现</b>一张低一级的随从牌。"
        }
        
    }
      