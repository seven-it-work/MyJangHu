
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_126_battlegroundsImage.png
      */
      export default class YeHuoYuanSuV29_4_2_199503 extends BaseCard {
         name = "野火元素"
         ethnicity = ["元素"]
         attack = 6
         life = 3
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            return "在本随从攻击并消灭一个随从后，对一个相邻的随从造成超过目标生命值的伤害。"
        }
        
    }
      