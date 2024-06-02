
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_811_battlegroundsImage.png
      */
      export default class FuLuShenLongYuLongV29_4_2_199503 extends BaseCard {
         name = "福禄神龙玉珑"
         ethnicity = ["龙"]
         attack = 8
         life = 8
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b>使你等级最低的两个随从<i>（福禄神龙玉珑除外）</i>变为金色。"
            }
            return "<b>战斗开始时：</b> 使你等级最低的随从<i>（福禄神龙玉珑除外）</i>变为金色。"
         }
    }
      