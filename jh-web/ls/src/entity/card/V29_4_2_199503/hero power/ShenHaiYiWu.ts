
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_HERO_304p_battlegroundsImage.png
      */
      export default class ShenHaiYiWu extends BaseCard {
         name = "深海遗物"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>发现</b>一张你当前或更低等级的<b>塑造法术</b>的法术牌，其效果永久有效。"
        }
        
    }
      