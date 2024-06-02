
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_357_battlegroundsImage.png
      */
      export default class XinLingNiMoV29_4_2_199503 extends BaseCard {
         name = "心灵泥魔"
         ethnicity = ["恶魔"]
         attack = 3
         life = 2
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>选择一个友方恶魔，使其吞食酒馆中的一个随从，获得其双倍属性值。"
            }
            return "<b>战吼：</b>选择一个友方恶魔，使其吞食酒馆中的一个随从，获得其属性值。"
         }
    }
      