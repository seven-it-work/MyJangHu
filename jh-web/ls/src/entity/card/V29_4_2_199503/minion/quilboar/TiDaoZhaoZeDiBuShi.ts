
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_100_battlegroundsImage.png
      */
      export default class TiDaoZhaoZeDiBuShiV29_4_2_199503 extends BaseCard {
         name = "剃刀沼泽地卜师"
         ethnicity = ["野猪人"]
         attack = 3
         life = 1
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>获取2张<b>鲜血宝石</b>。"
            }
            return "<b>战吼：</b>获取一张<b>鲜血宝石</b>。"
         }
    }
      