
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Reward_809_battlegroundsImage.png
      */
      export default class ShenShengHuJiaV29_4_2_199503 extends BaseCard {
         name = "神圣护甲"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "在你的回合结束时，使你手牌中最左边的随从牌获得+8/+8和<b>圣盾</b>。"
        }
        
    }
      