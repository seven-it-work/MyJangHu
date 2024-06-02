
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_002_battlegroundsImage.png
      */
      export default class BeiLeiShouCangJiaV29_4_2_199503 extends BaseCard {
         name = "贝类收藏家"
         ethnicity = ["纳迦"]
         attack = 4
         life = 3
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>获取2张铸币牌。"
            }
            return "<b>战吼：</b>获取一张铸币牌。"
         }
    }
      