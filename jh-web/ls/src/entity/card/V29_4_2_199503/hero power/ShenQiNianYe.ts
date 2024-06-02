
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_HERO_101p_battlegroundsImage.png
      */
      export default class ShenQiNianYe extends BaseCard {
         name = "神奇黏液"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择一个友方随从。<b>战斗开始时：</b>将其变形成为你的队友的等级最高的随从。"
        }
        
    }
      