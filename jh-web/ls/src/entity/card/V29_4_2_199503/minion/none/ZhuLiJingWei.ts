
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_845_battlegroundsImage.png
      */
      export default class ZhuLiJingWeiV29_4_2_199503 extends BaseCard {
         name = "助理警卫"
         ethnicity = ["中立"]
         attack = 2
         life = 3
         graded = 4
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>使一个随从获得<b>嘲讽</b>，然后使你的<b>嘲讽</b>随从获得+4/+6。"
            }
            return "<b>战吼：</b>使一个随从获得<b>嘲讽</b>，然后使你的<b>嘲讽</b>随从获得+2/+3。"
         }
    }
