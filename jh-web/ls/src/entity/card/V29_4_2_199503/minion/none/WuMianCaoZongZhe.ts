
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG_EX1_564_G_image.png
      */
      export default class WuMianCaoZongZhe extends BaseCard {
         name = "无面操纵者"
         ethnicity = ["中立"]
         attack = 6
         life = 6
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>战吼：</b>选择一个随从，成为它的复制。"
        }
        
    }
      