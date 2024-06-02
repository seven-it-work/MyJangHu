
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_HERO_010p_battlegroundsImage.png
      */
      export default class JianDieTanCha extends BaseCard {
         name = "间谍探查"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "从你下一个对手的战队中<b>发现</b>一个随从的原始版复制。"
        }
        
    }
      