
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_002t_battlegroundsImage.png
      */
      export default class NianNianDun extends BaseCard {
         name = "黏黏盾"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "使一个随从获得+1/+1和<b>嘲讽</b>。"
        }
        
    }
      