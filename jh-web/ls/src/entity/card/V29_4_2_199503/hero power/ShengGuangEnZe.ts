
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_010_battlegroundsImage.png
      */
      export default class ShengGuangEnZe extends BaseCard {
         name = "圣光恩泽"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个随从获得<b>圣盾</b>。"
        }
        
    }
      