
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_Reward_506_battlegroundsImage.png
      */
      export default class ShuangTouDaJiangV29_4_2_199503 extends BaseCard {
         name = "双头大奖"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "每回合中，在你第一次购买卡牌时，获取一张额外复制。"
        }
        
    }
      