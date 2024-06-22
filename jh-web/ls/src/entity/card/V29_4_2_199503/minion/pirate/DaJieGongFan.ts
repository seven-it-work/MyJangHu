
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_118_battlegroundsImage.png
      */
      export default class DaJieGongFanV29_4_2_199503 extends BaseCard {
         name = "打劫共犯"
         ethnicity = ["海盗"]
         attack = 2
         life = 2
         graded = 3
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "在你的回合开始时，你和你的队友各获得2枚铸币。"
            }
            return "在你的回合开始时，你和你的队友各获得1枚铸币。"
         }
    }
