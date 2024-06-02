
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_018_battlegroundsImage.png
      */
      export default class TiaoXinDeChuanGongV29_4_2_199503 extends BaseCard {
         name = "挑衅的船工"
         ethnicity = ["海盗"]
         attack = 2
         life = 5
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "每当本随从获得攻击力时，永久获得+2生命值。"
            }
            return "每当本随从获得攻击力时，永久获得+1生命值。"
         }
    }
      