
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_283p_t2_battlegroundsImage.png
      */
      export default class TieLuBao extends BaseCard {
         name = "铁炉堡"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 2回合后，获得2枚铸币。<i>（还剩 回合！）</i>"
        }
        
    }
      