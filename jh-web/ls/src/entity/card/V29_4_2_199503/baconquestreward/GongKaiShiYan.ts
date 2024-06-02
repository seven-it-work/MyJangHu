
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_Reward_513_battlegroundsImage.png
      */
      export default class GongKaiShiYanV29_4_2_199503 extends BaseCard {
         name = "公开试演"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "baconquestreward"

         

         descriptionStr() {
            return "在你的回合 开始时，<b>发现</b>一个伙伴。"
        }
        
    }
      