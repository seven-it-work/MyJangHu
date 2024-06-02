
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_024_battlegroundsImage.png
      */
      export default class FuShengBiYou extends BaseCard {
         name = "复生庇佑"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "直到下个回合，使一个随从获得<b>复生</b>。"
        }
        
    }
      