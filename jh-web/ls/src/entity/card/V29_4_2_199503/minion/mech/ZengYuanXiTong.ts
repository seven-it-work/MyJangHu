
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_109_battlegroundsImage.png
      */
      export default class ZengYuanXiTongV29_4_2_199503 extends BaseCard {
         name = "增援系统"
         ethnicity = ["机械"]
         attack = 4
         life = 5
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，使你的队友战队中的2个随从获得<b>圣盾</b>。"
            }
            return "在你的回合结束时，使你的队友战队中的一个随从获得<b>圣盾</b>。"
         }
    }
