
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_080_battlegroundsImage.png
      */
      export default class KeErSuJiaDeDeMao extends BaseCard {
         name = "克尔苏加德的猫"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在一个其他英雄死亡后，从其战队中<b>发现</b>一个随从。保留所有附加效果。"
        }
        
    }
      