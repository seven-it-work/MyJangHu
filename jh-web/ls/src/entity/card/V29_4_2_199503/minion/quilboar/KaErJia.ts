
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_303_battlegroundsImage.png
      */
      export default class KaErJiaV29_4_2_199503 extends BaseCard {
         name = "卡尔加"
         ethnicity = ["野猪人"]
         attack = 4
         life = 4
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，对你的其他随从各使用2张<b>鲜血宝石</b>。"
            }
            return "在你的回合结束时，对你的其他随从各使用一张<b>鲜血宝石</b>。"
         }
    }
      