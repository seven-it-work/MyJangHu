
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_121_battlegroundsImage.png
      */
      export default class DuoLuoZheXinShiV29_4_2_199503 extends BaseCard {
         name = "堕落者信使"
         ethnicity = ["恶魔"]
         attack = 9
         life = 6
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>在本局对战中，你的队伍酒馆中的随从拥有+2/+2。"
            }
            return "<b>战吼：</b>在本局对战中，你的队伍酒馆中的随从拥有+1/+1。"
         }
    }
      