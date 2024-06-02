
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_HERO_201p_battlegroundsImage.png
      */
      export default class ChuXu extends BaseCard {
         name = "触须"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动 战斗开始时：</b>召唤一条 / 并具有<b>嘲讽</b>的触须。<i>（在你出售一个随从后获得+1/+1！）</i>"
        }
        
    }
      