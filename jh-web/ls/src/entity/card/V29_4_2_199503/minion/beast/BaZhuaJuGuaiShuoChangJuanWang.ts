
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_804_battlegroundsImage.png
      */
      export default class BaZhuaJuGuaiShuoChangJuanWangV29_4_2_199503 extends BaseCard {
         name = "八爪巨怪，说唱卷王"
         ethnicity = ["野兽"]
         attack = 8
         life = 8
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>召唤一个 / 的触手。<i>（在战斗中，在你召唤一个随从后，触手永久获得+4/+4！）</i>"
            }
            return "<b>亡语：</b>召唤一个 / 的触手。<i>（在战斗中，在你召唤一个随从后，触手永久获得+2/+2！）</i>"
         }
    }
