
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_301p_battlegroundsImage.png
      */
      export default class TunShi extends BaseCard {
         name = "吞噬"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "移除一个友方随从，将它的属性值吐到另一个随从身上。获得1枚铸币。"
        }
        
    }
      