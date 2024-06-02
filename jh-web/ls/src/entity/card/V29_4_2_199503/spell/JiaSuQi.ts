
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Reward_504t_battlegroundsImage.png
      */
      export default class JiaSuQi extends BaseCard {
         name = "加速器"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "将一个随从变形成为高一级的随从。"
        }
        
    }
      