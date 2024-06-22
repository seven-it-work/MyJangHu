
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_008_battlegroundsImage.png
      */
      export default class ShanLinNaJiaV29_4_2_199503 extends BaseCard {
         name = "闪鳞纳迦"
         ethnicity = ["纳迦"]
         attack = 4
         life = 6
         graded = 5
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽</b>，<b>塑造法术：</b>直到下个回合，使一个随从获得<b>圣盾</b>。"
            }
            return "<b>嘲讽</b>，<b>塑造法术：</b>直到下个回合，使一个随从获得<b>圣盾</b>。"
         }
    }
