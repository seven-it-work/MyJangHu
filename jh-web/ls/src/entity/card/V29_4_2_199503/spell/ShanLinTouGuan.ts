
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_008t_battlegroundsImage.png
      */
      export default class ShanLinTouGuan extends BaseCard {
         name = "闪鳞头冠"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "直到下个回合，使一个随从获得<b>圣盾</b>。"
        }
        
    }
