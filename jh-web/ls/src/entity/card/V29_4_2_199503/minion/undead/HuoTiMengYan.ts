
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_HERO_280_Buddy_imageFromHsJson512x.png
      */
      export default class HuoTiMengYanV29_4_2_199503 extends BaseCard {
         name = "活体梦魇"
         ethnicity = ["亡灵"]
         attack = 6
         life = 4
         graded = 3
         cardType = "minion"



         descriptionStr() {
            return "在你购买一张牌后，酒馆中的随从在本回合中拥有+2/+1。"
        }

    }
