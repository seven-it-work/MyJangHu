
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_810_battlegroundsImage.png
      */
      export default class QianZhiYouLongV29_4_2_199503 extends BaseCard {
         name = "千纸幼龙"
         ethnicity = ["龙"]
         attack = 2
         life = 3
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b>使你最左边的两条龙获得+1/+2和<b>风怒</b>。"
            }
            return "<b>战斗开始时：</b>使你最左边的龙获得+1/+2和<b>风怒</b>。"
         }
    }
