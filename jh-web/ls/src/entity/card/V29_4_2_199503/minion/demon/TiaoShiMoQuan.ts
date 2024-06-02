
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_009_battlegroundsImage.png
      */
      export default class TiaoShiMoQuanV29_4_2_199503 extends BaseCard {
         name = "挑食魔犬"
         ethnicity = ["恶魔"]
         attack = 1
         life = 1
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>随机吞食酒馆中的一个随从，获得其双倍属性值。"
            }
            return "<b>战吼：</b>随机吞食酒馆中的一个随从，获得其属性值。"
         }
    }
      