
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_585_battlegroundsImage.png
      */
      export default class HaoJiaoSiJiV29_4_2_199503 extends BaseCard {
         name = "嚎叫司机"
         ethnicity = ["野猪人"]
         attack = 4
         life = 5
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合开始时，弃掉一张法术牌以获得8枚铸币。"
            }
            return "在你的回合开始时，弃掉一张法术牌以获得4枚铸币。"
         }
    }
