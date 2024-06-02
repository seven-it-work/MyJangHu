
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_719t_battlegroundsImage.png
      */
      export default class JinChui extends BaseCard {
         name = "金锤"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "直到下回合，使一个友方随从变为金色。"
        }
        
    }
      