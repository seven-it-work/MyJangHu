
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_040_battlegroundsImage.png
      */
      export default class LieHuoFeiYuV29_4_2_199503 extends BaseCard {
         name = "烈火飞鱼"
         ethnicity = ["龙","鱼人"]
         attack = 2
         life = 4
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你触发一个<b>战吼</b>后，获得+2/+2。"
            }
            return "在你触发一个<b>战吼</b>后，获得+1/+1。"
         }
    }
      