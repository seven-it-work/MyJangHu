
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_10_Buddy_imageFromHsJson512x.png
      */
      export default class XiuShuiDaHengV29_4_2_199503 extends BaseCard {
         name = "锈水大亨"
         ethnicity = ["中立"]
         attack = 6
         life = 3
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            return "<b>抉择：</b>在本回合中你每花一枚铸币，使一个随从获得+1攻击力；或者+1生命值。"
        }
        
    }
