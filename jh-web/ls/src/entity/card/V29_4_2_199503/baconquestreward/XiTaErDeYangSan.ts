
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_115_battlegroundsImage.png
      */
      export default class XiTaErDeYangSanV29_4_2_199503 extends BaseCard {
         name = "西塔尔的阳伞"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "在你的回合结束时，使你最右边的随从直到下回合获得<b>潜行</b>，并使其获得+8生命值。"
        }
        
    }
      