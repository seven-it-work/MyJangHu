
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_016_battlegroundsImage.png
      */
      export default class SaGeLaSiDeYongShiV29_4_2_199503 extends BaseCard {
         name = "萨格拉斯的勇士"
         ethnicity = ["恶魔"]
         attack = 10
         life = 10
         graded = 7
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "酒馆中的随从拥有+20/+20。"
            }
            return "酒馆中的随从拥有+10/+10。"
         }
    }
      