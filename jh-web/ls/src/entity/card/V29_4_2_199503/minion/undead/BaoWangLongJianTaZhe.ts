
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_634_battlegroundsImage.png
      */
      export default class BaoWangLongJianTaZheV29_4_2_199503 extends BaseCard {
         name = "暴亡龙践踏者"
         ethnicity = ["亡灵","野兽"]
         attack = 4
         life = 11
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在战斗中， 在你召唤一个随从后，使你的所有随从获得+6攻击力。"
            }
            return "在战斗中， 在你召唤一个随从后，使你的所有随从获得+3攻击力。"
         }
    }
      