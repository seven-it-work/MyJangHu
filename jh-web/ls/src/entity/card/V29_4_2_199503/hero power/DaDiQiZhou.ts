
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_001p_t1_battlegroundsImage.png
      */
      export default class DaDiQiZhou extends BaseCard {
         name = "大地祈咒"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>战斗开始时：</b>随机使4个友方随从获得“<b>亡语：</b>召唤一个1/1的元素。”"
        }
        
    }
      