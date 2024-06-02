
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_551_battlegroundsImage.png
      */
      export default class JiuShuZheNaLaV29_4_2_199503 extends BaseCard {
         name = "救赎者娜拉"
         ethnicity = ["中立"]
         attack = 5
         life = 6
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当你施放一个酒馆法术时，使每个类型的各一个友方随从获得+4/+4。"
            }
            return "每当你施放一个酒馆法术时，使每个类型的各一个友方随从获得+2/+2。"
         }
    }
      