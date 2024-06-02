
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_201_Buddy_imageFromHsJson512x.png
      */
      export default class JiaDeLinDaShiV29_4_2_199503 extends BaseCard {
         name = "加德林大师"
         ethnicity = ["中立"]
         attack = 6
         life = 5
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            return "在你的回合结束时，本随从左侧的随从会复制本随从的攻击力。"
        }
        
    }
      