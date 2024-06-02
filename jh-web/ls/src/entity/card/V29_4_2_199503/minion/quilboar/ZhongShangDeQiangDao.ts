
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_582_battlegroundsImage.png
      */
      export default class ZhongShangDeQiangDaoV29_4_2_199503 extends BaseCard {
         name = "重伤的强盗"
         ethnicity = ["野猪人"]
         attack = 3
         life = 3
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你的回合开始时，弃掉一张法术牌以获取6张<b>鲜血宝石</b>。"
            }
            return "在你的回合开始时，弃掉一张法术牌以获取3张<b>鲜血宝石</b>。"
         }
    }
      