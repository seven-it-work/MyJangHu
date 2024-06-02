
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_814_battlegroundsImage.png
      */
      export default class KuQingMinYaoGeShouV29_4_2_199503 extends BaseCard {
         name = "苦情民谣歌手"
         ethnicity = ["海盗"]
         attack = 3
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>在本回合中，每花一枚铸币，使一个海盗获得+2生命值。"
            }
            return "<b>战吼：</b>在本回合中，每花一枚铸币，使一个海盗获得+1生命值。"
         }
    }
      