
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_128_battlegroundsImage.png
      */
      export default class JingDunV29_4_2_199503 extends BaseCard {
         name = "镜盾"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "在每次<b>刷新</b>后，使酒馆中的一个随从获得+6/+6和<b>圣盾</b>。"
        }
        
    }
      