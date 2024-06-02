
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_036_battlegroundsImage.png
      */
      export default class XueNu extends BaseCard {
         name = "血怒"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择一个友方恶魔，使其吞食酒馆中的一个随从，获得其属性值。"
        }
        
    }
      