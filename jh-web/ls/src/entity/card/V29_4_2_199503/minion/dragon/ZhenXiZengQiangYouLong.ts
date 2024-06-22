
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_014_battlegroundsImage.png
      */
      export default class ZhenXiZengQiangYouLongV29_4_2_199503 extends BaseCard {
         name = "珍稀增强幼龙"
         ethnicity = ["龙"]
         attack = 5
         life = 4
         graded = 4
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b>使你的其他龙获得+6/+6。"
            }
            return "<b>战斗开始时：</b>使你的其他龙获得+3/+3。"
         }
    }
