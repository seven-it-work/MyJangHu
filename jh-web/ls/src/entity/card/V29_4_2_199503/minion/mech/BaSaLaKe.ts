
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_807t3_battlegroundsImage.png
      */
      export default class BaSaLaKe extends BaseCard {
         name = "巴萨拉克"
         ethnicity = ["机械","恶魔"]
         attack = 10
         life = 1
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>复生</b>。可以<b>磁力</b>吸附在机械<i>和</i>恶魔上。"
        }
        
    }
      