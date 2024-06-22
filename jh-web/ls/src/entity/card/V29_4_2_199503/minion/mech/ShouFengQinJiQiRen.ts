
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_147_battlegroundsImage.png
      */
      export default class ShouFengQinJiQiRenV29_4_2_199503 extends BaseCard {
         name = "手风琴机器人"
         ethnicity = ["机械"]
         attack = 3
         life = 3
         graded = 3
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>磁力</b>。在你的回合开始时，获得2枚额外铸币。"
            }
            return "<b>磁力</b>。在你的回合开始时，获得1枚额外铸币。"
         }
    }
