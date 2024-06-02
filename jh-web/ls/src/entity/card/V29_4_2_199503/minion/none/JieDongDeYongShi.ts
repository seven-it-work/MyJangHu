
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_27_Buddy_imageFromHsJson512x.png
      */
      export default class JieDongDeYongShiV29_4_2_199503 extends BaseCard {
         name = "解冻的勇士"
         ethnicity = ["中立"]
         attack = 5
         life = 7
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            return "在你的回合结束时，随机获取酒馆中一张被<b>冻结</b>的牌。"
        }
        
    }
      