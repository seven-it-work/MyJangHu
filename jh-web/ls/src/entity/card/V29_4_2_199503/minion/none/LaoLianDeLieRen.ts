
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_50_Buddy_battlegroundsImage.png
      */
      export default class LaoLianDeLieRenV29_4_2_199503 extends BaseCard {
         name = "老练的猎人"
         ethnicity = ["中立"]
         attack = 5
         life = 3
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            return "在你的回合开始时，获取一张上一个对手的伙伴。"
        }
        
    }
