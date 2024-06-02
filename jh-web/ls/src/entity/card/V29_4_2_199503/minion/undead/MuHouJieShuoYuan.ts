
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_112_battlegroundsImage.png
      */
      export default class MuHouJieShuoYuanV29_4_2_199503 extends BaseCard {
         name = "墓后解说员"
         ethnicity = ["亡灵"]
         attack = 2
         life = 7
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>复仇（3）：</b>你的队友获取2张其多数随从的类型的随从牌。"
            }
            return "<b>复仇（3）：</b>你的队友获取一张其多数随从的类型的随从牌。"
         }
    }
      