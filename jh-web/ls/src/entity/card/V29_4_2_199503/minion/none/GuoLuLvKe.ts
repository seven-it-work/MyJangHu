
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_114_battlegroundsImage.png
      */
      export default class GuoLuLvKeV29_4_2_199503 extends BaseCard {
         name = "过路旅客"
         ethnicity = ["中立"]
         attack = 2
         life = 2
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每回合中你的队伍第一次<b>传递</b>时，获得+2/+4。"
            }
            return "每回合中你的队伍第一次<b>传递</b>时，获得+1/+2。"
         }
    }
