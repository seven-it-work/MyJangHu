
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_HERO_000_Buddy_imageFromHsJson512x.png
      */
      export default class FaMoSiDuiZhangV29_4_2_199503 extends BaseCard {
         name = "法莫斯队长"
         ethnicity = ["中立"]
         attack = 7
         life = 5
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            return "<b>抉择：</b>在本局对战的剩余时间内，“定罪”使随从额外获得+2攻击力；或者+2生命值。"
        }
        
    }
