
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_010_Gt_battlegroundsImage.png
      */
      export default class YuanShou extends BaseCard {
         name = "援手"
         ethnicity = ["亡灵"]
         attack = 4
         life = 2
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>复生</b>"
        }
        
    }
      