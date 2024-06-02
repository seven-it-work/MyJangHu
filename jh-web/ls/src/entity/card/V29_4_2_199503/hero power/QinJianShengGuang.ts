
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_101p_battlegroundsImage.png
      */
      export default class QinJianShengGuang extends BaseCard {
         name = "亲见圣光"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择酒馆中的一个随从，将其属性值变为2并置入你的手牌。"
        }
        
    }
      