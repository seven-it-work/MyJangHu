
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_518_battlegroundsImage.png
      */
      export default class MoAiLaTongXuV29_4_2_199503 extends BaseCard {
         name = "茉艾拉·铜须"
         ethnicity = ["中立"]
         attack = 3
         life = 9
         graded = 7
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "你的<b>战吼</b>和<b>亡语</b>会触发三次。"
            }
            return "你的<b>战吼</b>和<b>亡语</b>会触发两次。"
         }
    }
      