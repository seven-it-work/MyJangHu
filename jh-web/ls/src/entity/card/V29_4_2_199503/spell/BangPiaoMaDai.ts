
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_718t_battlegroundsImage.png
      */
      export default class BangPiaoMaDai extends BaseCard {
         name = "绑票麻袋"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "选择一张非金色的牌，将其移入你的手牌。"
        }
        
    }
      