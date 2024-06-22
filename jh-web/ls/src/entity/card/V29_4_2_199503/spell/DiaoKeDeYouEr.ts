
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_004t_battlegroundsImage.png
      */
      export default class DiaoKeDeYouEr extends BaseCard {
         name = "钓客的诱饵"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "直到下个回合，使一个随从获得+2生命值和<b>嘲讽</b>。"
        }
        
    }
