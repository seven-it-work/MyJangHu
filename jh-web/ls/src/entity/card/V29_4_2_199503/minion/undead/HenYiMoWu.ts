
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_120_battlegroundsImage.png
      */
      export default class HenYiMoWuV29_4_2_199503 extends BaseCard {
         name = "恨意魔巫"
         ethnicity = ["亡灵"]
         attack = 6
         life = 2
         graded = 3
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "每当本随从攻击时，使本随从右边的两个随从获得<b>复生</b>。"
            }
            return "每当本随从攻击时，使本随从右边的随从获得<b>复生</b>。"
         }
    }
