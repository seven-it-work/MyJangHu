
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_085_battlegroundsImage.png
      */
      export default class DianLiangJiuGuan extends BaseCard {
         name = "点亮酒馆"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个随从获得等同于你当前等级的属性值。"
        }
        
    }
      