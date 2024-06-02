
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_555_battlegroundsImage.png
      */
      export default class MiHuoJunGuV29_4_2_199503 extends BaseCard {
         name = "迷惑菌菇"
         ethnicity = ["中立"]
         attack = 2
         life = 4
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在本局对战中，你每施放一个酒馆法术，便拥有+4/+4<i>（无论本随从在哪）</i>。"
            }
            return "在本局对战中，你每施放一个酒馆法术，便拥有+2/+2<i>（无论本随从在哪）</i>。"
         }
    }
      