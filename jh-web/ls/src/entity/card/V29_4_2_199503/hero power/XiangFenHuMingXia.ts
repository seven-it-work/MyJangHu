
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_282p_battlegroundsImage.png
      */
      export default class XiangFenHuMingXia extends BaseCard {
         name = "香氛护命匣"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>战斗开始时：</b>消灭你生命值最低的随从。使你的其他随从获得其属性值。"
        }
        
    }
      