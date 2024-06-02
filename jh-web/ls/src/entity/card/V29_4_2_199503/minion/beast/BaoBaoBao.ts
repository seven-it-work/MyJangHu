
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_800t_battlegroundsImage.png
      */
      export default class BaoBaoBao extends BaseCard {
         name = "豹宝宝"
         ethnicity = ["野兽"]
         attack = 0
         life = 1
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>嘲讽</b>"
        }
        
    }
      