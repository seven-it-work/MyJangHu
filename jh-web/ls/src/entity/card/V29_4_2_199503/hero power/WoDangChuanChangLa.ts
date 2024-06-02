
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_HERO_101p_battlegroundsImage.png
      */
      export default class WoDangChuanChangLa extends BaseCard {
         name = "我当船长啦"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动：</b>在你购买一个海盗后，获得1枚铸币。"
        }
        
    }
      