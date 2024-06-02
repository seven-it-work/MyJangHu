
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_801_battlegroundsImage.png
      */
      export default class YinYuBaiEV29_4_2_199503 extends BaseCard {
         name = "银羽白鹅"
         ethnicity = ["野兽"]
         attack = 2
         life = 3
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从受到伤害，召唤一只4/4并具有<b>嘲讽</b>的雏鹅。"
            }
            return "每当本随从受到伤害，召唤一只2/2并具有<b>嘲讽</b>的雏鹅。"
         }
    }
      