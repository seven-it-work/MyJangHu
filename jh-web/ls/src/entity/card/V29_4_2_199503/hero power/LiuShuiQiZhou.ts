
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_001p_t3_battlegroundsImage.png
      */
      export default class LiuShuiQiZhou extends BaseCard {
         name = "流水祈咒"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>战斗开始时：</b>使你最右边的随从获得+3生命值和<b>嘲讽</b>。"
        }
        
    }
      