
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_HERO_305_Buddy_imageFromHsJson512x.png
      */
      export default class ChuLongQunV29_4_2_199503 extends BaseCard {
         name = "雏龙群"
         ethnicity = ["龙"]
         attack = 4
         life = 2
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            return "每当你召唤一条雏龙，永久获得+2/+2。"
        }
        
    }
      