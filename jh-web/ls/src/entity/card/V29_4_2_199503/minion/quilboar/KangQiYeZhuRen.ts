
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG20_201_battlegroundsImage.png
      */
      export default class KangQiYeZhuRenV29_4_2_199503 extends BaseCard {
         name = "扛旗野猪人"
         ethnicity = ["野猪人"]
         attack = 3
         life = 5
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合结束时，对相邻的随从使用2张<b>鲜血宝石</b>。"
            }
            return "在你的回合结束时，对相邻的随从使用一张<b>鲜血宝石</b>。"
         }
    }
