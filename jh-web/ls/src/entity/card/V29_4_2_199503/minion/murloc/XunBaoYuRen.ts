
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_360_battlegroundsImage.png
      */
      export default class XunBaoYuRenV29_4_2_199503 extends BaseCard {
         name = "寻宝鱼人"
         ethnicity = ["鱼人"]
         attack = 3
         life = 3
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>随机使你手牌中的一张随从牌获得+10/+10。"
            }
            return "<b>亡语：</b>随机使你手牌中的一张随从牌获得+5/+5。"
         }
    }
