
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_000_battlegroundsImage.png
      */
      export default class MiNiShiCongV29_4_2_199503 extends BaseCard {
         name = "迷你侍从"
         ethnicity = ["纳迦"]
         attack = 1
         life = 3
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b>直到下个回合，使一个随从获得+4攻击力。"
            }
            return "<b>塑造法术：</b>直到下个回合，使一个随从获得+2攻击力。"
         }
    }
      