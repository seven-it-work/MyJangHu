
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_025_battlegroundsImage.png
      */
      export default class JiaoDouShiV29_4_2_199503 extends BaseCard {
         name = "角逗士"
         ethnicity = ["纳迦"]
         attack = 3
         life = 3
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>圣盾</b> 每当你施放一个法术，获得+2攻击力。"
            }
            return "<b>圣盾</b> 每当你施放一个法术，获得+1攻击力。"
         }
    }
