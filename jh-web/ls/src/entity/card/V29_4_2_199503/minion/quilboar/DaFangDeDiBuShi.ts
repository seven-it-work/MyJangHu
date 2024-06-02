
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_111_battlegroundsImage.png
      */
      export default class DaFangDeDiBuShiV29_4_2_199503 extends BaseCard {
         name = "大方的地卜师"
         ethnicity = ["野猪人"]
         attack = 1
         life = 1
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b> 你和你的队友各获取2张<b>鲜血宝石</b>。"
            }
            return "<b>亡语：</b> 你和你的队友各获取一张<b>鲜血宝石</b>。"
         }
    }
      