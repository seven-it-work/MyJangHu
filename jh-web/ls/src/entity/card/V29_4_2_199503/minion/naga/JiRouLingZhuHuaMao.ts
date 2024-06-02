
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_083_battlegroundsImage.png
      */
      export default class JiRouLingZhuHuaMaoV29_4_2_199503 extends BaseCard {
         name = "肌肉领主滑矛"
         ethnicity = ["纳迦"]
         attack = 4
         life = 6
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，本回合中你每使用过一个不同的法术，使你的其他纳迦获得+2/+2。"
            }
            return "在你的回合结束时，本回合中你每使用过一个不同的法术，使你的其他纳迦获得+1/+1。"
         }
    }
      