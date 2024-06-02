
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_HERO_000p3_battlegroundsImage.png
      */
      export default class DingZuiDengJi3 extends BaseCard {
         name = "定罪（等级3）"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使所有友方随从获得+ /+ 。"
        }
        
    }
      