
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_062_battlegroundsImage.png
      */
      export default class MengJingZhiMen extends BaseCard {
         name = "梦境之门"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 每当酒馆<b>刷新</b>时，总会额外提供一条龙。"
        }
        
    }
      