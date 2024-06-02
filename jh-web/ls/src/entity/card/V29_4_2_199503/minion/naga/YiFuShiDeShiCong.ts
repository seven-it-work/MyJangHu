
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_012_battlegroundsImage.png
      */
      export default class YiFuShiDeShiCongV29_4_2_199503 extends BaseCard {
         name = "已腐蚀的侍从"
         ethnicity = ["纳迦"]
         attack = 3
         life = 3
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b>本随从的属性值变为三倍。"
            }
            return "<b>战斗开始时：</b>本随从的属性值翻倍。"
         }
    }
      