
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_008_G_battlegroundsImage.png
      */
      export default class YongHengQiShi extends BaseCard {
         name = "永恒骑士"
         ethnicity = ["亡灵"]
         attack = 8
         life = 2
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            return "在本局对战中，每有一个友方永恒骑士死亡，便拥有+2/+2<i>（无论本随从在哪）</i>。"
        }
        
    }
