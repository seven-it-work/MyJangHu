
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_Reward_715t3_battlegroundsImage.png
      */
      export default class HuShenKaiJia extends BaseCard {
         name = "护身铠甲"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "使一个随从获得+5/+5和<b>圣盾</b>。"
        }
        
    }
