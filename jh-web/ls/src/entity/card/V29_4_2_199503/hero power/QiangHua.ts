
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_HERO_204p_battlegroundsImage.png
      */
      export default class QiangHua extends BaseCard {
         name = "强化"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在每次<b>刷新</b>后，使酒馆中的一个随从获得<b>嘲讽</b>，<b>风怒</b>，<b>复生</b>或<b>圣盾</b>。"
        }
        
    }
      