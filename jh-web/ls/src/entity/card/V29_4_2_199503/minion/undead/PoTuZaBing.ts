
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_25_Buddy_imageFromHsJson512x.png
      */
      export default class PoTuZaBingV29_4_2_199503 extends BaseCard {
         name = "破土杂兵"
         ethnicity = ["亡灵"]
         attack = 2
         life = 2
         graded = 4
         cardType = "minion"



         descriptionStr() {
            return "每当你的英雄即将受到伤害时，改为本随从获得+2/+2。<i>（本回合还剩2次。）</i>"
        }

    }
