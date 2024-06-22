
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_877_battlegroundsImage.png
      */
      export default class MoXueYanJiangV29_4_2_199503 extends BaseCard {
         name = "魔血岩浆"
         ethnicity = ["元素","恶魔"]
         attack = 2
         life = 1
         graded = 3
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>在本局对战中，酒馆中的随从拥有+4攻击力。"
            }
            return "<b>亡语：</b>在本局对战中，酒馆中的随从拥有+2攻击力。"
         }
    }
