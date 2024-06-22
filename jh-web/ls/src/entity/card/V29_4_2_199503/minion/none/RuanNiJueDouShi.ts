
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_002_battlegroundsImage.png
      */
      export default class RuanNiJueDouShiV29_4_2_199503 extends BaseCard {
         name = "软泥角斗士"
         ethnicity = ["中立"]
         attack = 2
         life = 2
         graded = 2
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>获取四张可以使随从获得+1/+1和<b>嘲讽</b>的黏黏盾。"
            }
            return "<b>战吼：</b>获取两张可以使随从获得+1/+1和<b>嘲讽</b>的黏黏盾。"
         }
    }
