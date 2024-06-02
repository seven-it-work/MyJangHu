
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_082_battlegroundsImage.png
      */
      export default class CuXinDeTunJiZheV29_4_2_199503 extends BaseCard {
         name = "粗心的囤积者"
         ethnicity = ["鱼人"]
         attack = 4
         life = 5
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "当你出售本随从时，使一个友方鱼人获得本随从的双倍属性值。"
            }
            return "当你出售本随从时，使一个友方鱼人获得本随从的属性值。"
         }
    }
      