
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_004_battlegroundsImage.png
      */
      export default class TanShiDeWuZuErV29_4_2_199503 extends BaseCard {
         name = "贪食的乌祖尔"
         ethnicity = ["恶魔"]
         attack = 4
         life = 6
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b><b>嘲讽</b>。</b>在你使用一张恶魔牌后，吞食酒馆中的一个随从，获得其双倍属性值。"
            }
            return "<b><b>嘲讽</b>。</b>在你使用一张恶魔牌后，吞食酒馆中的一个随从，获得其属性值。"
         }
    }
      