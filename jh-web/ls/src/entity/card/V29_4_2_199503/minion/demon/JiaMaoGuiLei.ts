
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_140_battlegroundsImage.png
      */
      export default class JiaMaoGuiLeiV29_4_2_199503 extends BaseCard {
         name = "假冒鬼儡"
         ethnicity = ["恶魔"]
         attack = 1
         life = 1
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合 结束时，吞食酒馆中的一个随从以获得其双倍属性值。"
            }
            return "在你的回合结束时，吞食酒馆中的一个随从以获得其属性值。"
         }
    }
      