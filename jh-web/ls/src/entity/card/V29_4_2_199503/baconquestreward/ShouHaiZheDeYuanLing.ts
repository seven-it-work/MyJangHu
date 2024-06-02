
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_138_battlegroundsImage.png
      */
      export default class ShouHaiZheDeYuanLingV29_4_2_199503 extends BaseCard {
         name = "受害者的怨灵"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "在每场战斗后，获取上一个死亡的友方随从的一张原始版复制。"
        }
        
    }
      