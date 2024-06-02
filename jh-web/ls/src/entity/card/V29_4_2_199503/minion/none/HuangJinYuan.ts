
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_353_Gt_battlegroundsImage.png
      */
      export default class HuangJinYuan extends BaseCard {
         name = "黄金猿"
         ethnicity = ["中立"]
         attack = 6
         life = 6
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>嘲讽</b> <i>（你找到啦！）</i>"
        }
        
    }
      