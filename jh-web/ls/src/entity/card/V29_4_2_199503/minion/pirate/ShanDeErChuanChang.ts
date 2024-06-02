
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_034_battlegroundsImage.png
      */
      export default class ShanDeErChuanChangV29_4_2_199503 extends BaseCard {
         name = "杉德尔船长"
         ethnicity = ["海盗"]
         attack = 7
         life = 7
         graded = 7
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>使一个友方随从变为金色。"
            }
            return "<b>战吼：</b>使一个友方随从变为金色。"
         }
    }
      