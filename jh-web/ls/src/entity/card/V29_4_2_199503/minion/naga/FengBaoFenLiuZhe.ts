
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_122_battlegroundsImage.png
      */
      export default class FengBaoFenLiuZheV29_4_2_199503 extends BaseCard {
         name = "风暴分流者"
         ethnicity = ["纳迦"]
         attack = 5
         life = 5
         graded = 4
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "每回合一次：在你<b>传递</b>酒馆法术牌后，获取2张它的新复制。"
            }
            return "每回合一次：在你<b>传递</b>酒馆法术牌后，获取一张它的新复制。"
         }
    }
