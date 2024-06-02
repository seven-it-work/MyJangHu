
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_104_battlegroundsImage.png
      */
      export default class ReXinDeShaLongJiuBaoV29_4_2_199503 extends BaseCard {
         name = "热心的沙龙酒保"
         ethnicity = ["中立"]
         attack = 3
         life = 4
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>你的队友获取2张铸币牌。"
            }
            return "<b>战吼：</b>你的队友获取一张铸币牌。"
         }
    }
      