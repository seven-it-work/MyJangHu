
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_001p_t2_battlegroundsImage.png
      */
      export default class HuoYanQiZhou extends BaseCard {
         name = "火焰祈咒"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>战斗开始时：</b>使你最左边的随从的攻击力翻倍。"
        }
        
    }
      