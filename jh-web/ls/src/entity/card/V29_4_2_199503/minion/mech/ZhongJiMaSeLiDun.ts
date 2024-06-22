
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_807t2_battlegroundsImage.png
      */
      export default class ZhongJiMaSeLiDun extends BaseCard {
         name = "终极玛瑟里顿"
         ethnicity = ["机械","恶魔"]
         attack = 1
         life = 10
         graded = 1
         cardType = "minion"



         descriptionStr() {
            return "<b>嘲讽</b>。可以<b>磁力</b>吸附在机械<i>和</i>恶魔上。"
        }

    }
