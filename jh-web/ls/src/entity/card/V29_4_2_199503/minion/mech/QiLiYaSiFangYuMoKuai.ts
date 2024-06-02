
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_100t2_battlegroundsImage.png
      */
      export default class QiLiYaSiFangYuMoKuai extends BaseCard {
         name = "奇利亚斯防御模块"
         ethnicity = ["机械"]
         attack = 3
         life = 4
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            return "<b>圣盾</b> <i>可以与任意奇利亚斯模块三连。</i>"
        }
        
    }
      