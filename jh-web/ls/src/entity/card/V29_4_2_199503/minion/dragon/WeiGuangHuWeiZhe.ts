
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_888_battlegroundsImage.png
      */
      export default class WeiGuangHuWeiZheV29_4_2_199503 extends BaseCard {
         name = "微光护卫者"
         ethnicity = ["龙"]
         attack = 1
         life = 3
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从攻击时，获得+4/+2。"
            }
            return "每当本随从攻击时，获得+2/+1。"
         }
    }
      