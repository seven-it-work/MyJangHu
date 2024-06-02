
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_201p_battlegroundsImage.png
      */
      export default class LingHunHuHuan extends BaseCard {
         name = "灵魂互换"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择2个随从。直到下个回合，它们会获得对方的攻击力。"
        }
        
    }
      