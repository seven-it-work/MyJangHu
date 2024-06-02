
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_001p_battlegroundsImage.png
      */
      export default class YongBaoYuanSu extends BaseCard {
         name = "拥抱元素"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择一个元素。<b>战斗开始时：</b>唤起选择的元素。"
        }
        
    }
      