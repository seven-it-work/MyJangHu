
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_066_battlegroundsImage.png
      */
      export default class CuiLvMoZhu extends BaseCard {
         name = "翠绿魔珠"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 你每使用三张随从牌，第三个随从获得+2/+2。"
        }
        
    }
      