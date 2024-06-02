
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_155_battlegroundsImage.png
      */
      export default class BaoShiZouSiShangV29_4_2_199503 extends BaseCard {
         name = "宝石走私商"
         ethnicity = ["野猪人"]
         attack = 3
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>对你的所有其他随从各使用2张<b>鲜血宝石</b>。"
            }
            return "<b>战吼：</b>对你的所有其他随从各使用一张<b>鲜血宝石</b>。"
         }
    }
      