
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_12_battlegroundsImage.png
      */
      export default class ShuWang extends BaseCard {
         name = "鼠王"
         
         attack = 0
         life = 30
         graded = 1
         cardType = "hero"

         armor = 9

         descriptionStr() {
            return ""
        }
        
    }
      