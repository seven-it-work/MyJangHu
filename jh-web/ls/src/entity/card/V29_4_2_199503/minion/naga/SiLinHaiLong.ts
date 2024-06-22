
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_870_battlegroundsImage.png
      */
      export default class SiLinHaiLongV29_4_2_199503 extends BaseCard {
         name = "死鳞海龙"
         ethnicity = ["纳迦","龙"]
         attack = 8
         life = 3
         graded = 5
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b> 触发一个友方随从的<b>战吼</b>两次。"
            }
            return "<b>塑造法术：</b>触发一个友方随从的<b>战吼</b>。"
         }
    }
