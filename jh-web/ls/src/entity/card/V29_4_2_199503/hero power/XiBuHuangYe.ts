
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_283p_t1_battlegroundsImage.png
      */
      export default class XiBuHuangYe extends BaseCard {
         name = "西部荒野"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 1回合后，使你最左边的随从获得+2/+2。<i>（还剩 回合！）</i>"
        }
        
    }
      