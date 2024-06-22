
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_873_battlegroundsImage.png
      */
      export default class MoXueNianJiangV29_4_2_199503 extends BaseCard {
         name = "魔血黏浆"
         ethnicity = ["元素","恶魔"]
         attack = 3
         life = 4
         graded = 3
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>在本局对战中，酒馆中的随从拥有+4生命值。"
            }
            return "<b>战吼：</b>在本局对战中，酒馆中的随从拥有+2生命值。"
         }
    }
