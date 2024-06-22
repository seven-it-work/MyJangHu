
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_004_battlegroundsImage.png
      */
      export default class ShenHaiDiaoKeV29_4_2_199503 extends BaseCard {
         name = "深海钓客"
         ethnicity = ["纳迦"]
         attack = 2
         life = 2
         graded = 1
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b>直到下个回合，使一个随从获得+4生命值和<b>嘲讽</b>。"
            }
            return "<b>塑造法术：</b>直到下个回合，使一个随从获得+2生命值和<b>嘲讽</b>。"
         }
    }
