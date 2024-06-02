
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_137_battlegroundsImage.png
      */
      export default class CaiKuaiYuRenV29_4_2_199503 extends BaseCard {
         name = "裁脍鱼人"
         ethnicity = ["鱼人"]
         attack = 4
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "当本牌在你手牌中时，在你使用一张鱼人牌后，获得+6/+6。"
            }
            return "当本牌在你手牌中时，在你使用一张鱼人牌后，获得+3/+3。"
         }
    }
      