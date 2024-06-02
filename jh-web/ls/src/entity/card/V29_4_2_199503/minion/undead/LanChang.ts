
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_HERO_100_Buddy_imageFromHsJson512x.png
      */
      export default class LanChangV29_4_2_199503 extends BaseCard {
         name = "烂肠"
         ethnicity = ["亡灵"]
         attack = 4
         life = 2
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            return "<b>亡语：</b>随机召唤一个亡灵造物。"
        }
        
    }
      