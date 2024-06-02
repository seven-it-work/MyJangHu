
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_21_Buddy_imageFromHsJson512x.png
      */
      export default class JieTouMoShuShiV29_4_2_199503 extends BaseCard {
         name = "街头魔术师"
         ethnicity = ["中立"]
         attack = 3
         life = 5
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            return "在你的回合结束时，随机施放一个<b>奥秘</b>。"
        }
        
    }
      