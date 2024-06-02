
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_001p_t4_battlegroundsImage.png
      */
      export default class ShanDianQiZhou extends BaseCard {
         name = "闪电祈咒"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>战斗开始时：</b>随机对5个敌方随从造成1点伤害。"
        }
        
    }
      