
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_203_battlegroundsImage.png
      */
      export default class YeZhuYuYanZheV29_4_2_199503 extends BaseCard {
         name = "野猪预言者"
         ethnicity = ["中立"]
         attack = 2
         life = 3
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽</b>。在你使用一张野猪人后，获取2张<b>鲜血宝石</b>。"
            }
            return "<b>嘲讽</b>。在你使用一张野猪人后，获取一张<b>鲜血宝石</b>。"
         }
    }
      