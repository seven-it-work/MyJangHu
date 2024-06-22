
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_813t_battlegroundsImage.png
      */
      export default class DianJinShu extends BaseCard {
         name = "点金术"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "使一个友方随从变为金色。"
        }
        
    }
