
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_131_battlegroundsImage.png
      */
      export default class XueShouV29_4_2_199503 extends BaseCard {
         name = "血手"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "在你的回合开始时，使你手牌中的一张随从牌获得+12/+12。"
        }
        
    }
      