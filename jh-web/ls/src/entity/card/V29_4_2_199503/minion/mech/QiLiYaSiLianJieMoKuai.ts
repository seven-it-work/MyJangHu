
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_100t5_battlegroundsImage.png
      */
      export default class QiLiYaSiLianJieMoKuai extends BaseCard {
         name = "奇利亚斯连接模块"
         ethnicity = ["机械"]
         attack = 3
         life = 4
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            return "<b>磁力</b> <i>可以与任意奇利亚斯模块三连。</i>"
        }
        
    }
