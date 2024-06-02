
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_086_battlegroundsImage.png
      */
      export default class SuiFengErXing extends BaseCard {
         name = "随风而行"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> <b>战斗开始时：</b>使你最左边的随从获得<b>风怒</b>，<b>圣盾</b>以及<b>嘲讽</b>。"
        }
        
    }
      