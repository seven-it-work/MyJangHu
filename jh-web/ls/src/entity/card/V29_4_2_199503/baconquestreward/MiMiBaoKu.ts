
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_361_battlegroundsImage.png
      */
      export default class MiMiBaoKuV29_4_2_199503 extends BaseCard {
         name = "秘密宝库"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "在你的回合开始时，获得 枚铸币。<i>（每回合都会升级！）</i>"
        }
        
    }
      