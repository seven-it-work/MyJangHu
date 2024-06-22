
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_100_battlegroundsImage.png
      */
      export default class YuanXingZheZhouZhuoV29_4_2_199503 extends BaseCard {
         name = "远行者周卓"
         ethnicity = ["中立"]
         attack = 4
         life = 3
         graded = 2
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "每回合中有2次免费<b>传递</b>。<i>（还剩 次！）</i>"
            }
            return "每回合中有1次免费<b>传递</b>。<i>（还剩 次！）</i>"
         }
    }
