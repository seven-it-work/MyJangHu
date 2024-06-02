
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_HERO_100p_battlegroundsImage.png
      */
      export default class  extends BaseCard {
         name = ""
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动 对战开始时：</b>复制你的队友的英雄技能。"
        }
        
    }
      