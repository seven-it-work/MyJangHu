
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_810_battlegroundsImage.png
      */
      export default class HuoYaoYunShuGongV29_4_2_199503 extends BaseCard {
         name = "火药运输工"
         ethnicity = ["海盗"]
         attack = 1
         life = 6
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你花掉4枚铸币后，使你的海盗获得+2攻击力。<i>（还剩 枚！）</i>"
            }
            return "在你花掉4枚铸币后，使你的海盗获得+1攻击力。<i>（还剩 枚！）</i>"
         }
    }
      