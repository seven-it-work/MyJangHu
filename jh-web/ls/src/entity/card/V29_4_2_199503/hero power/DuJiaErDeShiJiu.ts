
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_283p_battlegroundsImage.png
      */
      export default class DuJiaErDeShiJiu extends BaseCard {
         name = "杜加尔的狮鹫"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择一条新航线，完成飞行时获得特效！"
        }
        
    }
      