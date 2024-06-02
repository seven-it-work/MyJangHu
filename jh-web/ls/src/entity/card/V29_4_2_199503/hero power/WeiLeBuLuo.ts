
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_102p_battlegroundsImage.png
      */
      export default class WeiLeBuLuo extends BaseCard {
         name = "为了部落！"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "使一个酒馆中的随从获得+ /+ 。<i>（每 回合翻倍！）</i> 使一个酒馆中的随从获得+ /+ 。<i>（ 回合后翻倍！）</i>"
        }
        
    }
      