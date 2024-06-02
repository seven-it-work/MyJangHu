
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_003_Buddy_imageFromHsJson512x.png
      */
      export default class LeiMaoJunGuanV29_4_2_199503 extends BaseCard {
         name = "雷矛军官"
         ethnicity = ["中立"]
         attack = 4
         life = 7
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            return "<b>复仇（2）：</b>在本局对战中，酒馆中的随从拥有+1生命值。"
        }
        
    }
      