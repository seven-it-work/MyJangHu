
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_16_Buddy_imageFromHsJson512x.png
      */
      export default class LingShiShangRenV29_4_2_199503 extends BaseCard {
         name = "零食商人"
         ethnicity = ["中立"]
         attack = 5
         life = 4
         graded = 4
         cardType = "minion"



         descriptionStr() {
            return "在你的回合结束时，使你的等级3的随从获得+1/+2。"
        }

    }
