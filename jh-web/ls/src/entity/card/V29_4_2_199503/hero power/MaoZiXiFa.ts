
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_042_battlegroundsImage.png
      */
      export default class MaoZiXiFa extends BaseCard {
         name = "帽子戏法"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 当你购买一个随从时，使其获得一顶+1/+1的帽子。帽子会在出售随从时传递给一个友方随从。"
        }
        
    }
      