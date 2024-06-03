
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_046_battlegroundsImage.png
      */
      export default class RongYanYuRenV29_4_2_199503 extends BaseCard {
         name = "熔岩鱼人"
         ethnicity = ["鱼人","元素"]
         attack = 1
         life = 1
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，获得+2/+2。在本回合中你每使用过一张随从牌，重复一次。"
            }
            return "在你的回合结束时，获得+1/+1。在本回合中你每使用过一张随从牌，重复一次。"
         }
    }
