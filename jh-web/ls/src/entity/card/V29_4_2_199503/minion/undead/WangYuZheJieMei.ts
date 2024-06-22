
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_020_battlegroundsImage.png
      */
      export default class WangYuZheJieMeiV29_4_2_199503 extends BaseCard {
         name = "亡语者姐妹"
         ethnicity = ["亡灵"]
         attack = 5
         life = 9
         graded = 6
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "在一个友方随从<b>复生</b>后，使你的随从永久获得+2/+6。"
            }
            return "在一个友方随从<b>复生</b>后，使你的随从永久获得+1/+3。"
         }
    }
