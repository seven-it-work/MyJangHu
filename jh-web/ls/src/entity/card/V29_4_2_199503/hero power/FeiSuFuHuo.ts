
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_HERO_103p_battlegroundsImage.png
      */
      export default class FeiSuFuHuo extends BaseCard {
         name = "飞速复活"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "选择一个友方随从。<b>战斗开始时：</b>将其消灭。当你有空位时，重新召唤一个完全相同的复制。"
        }
        
    }
      