
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_082_battlegroundsImage.png
      */
      export default class YongYuanZhanFang extends BaseCard {
         name = "永远绽放"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你升级酒馆后，获得2枚铸币。"
        }
        
    }
      