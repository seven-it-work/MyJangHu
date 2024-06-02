
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_100p_battlegroundsImage.png
      */
      export default class ZhanDouDeRongYao extends BaseCard {
         name = "战斗的荣耀"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在友方随从消灭敌人后，使其永久获得+1攻击力。"
        }
        
    }
      