
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_120_battlegroundsImage.png
      */
      export default class PaiDuiYuanSuV29_4_2_199503 extends BaseCard {
         name = "派对元素"
         ethnicity = ["元素"]
         attack = 3
         life = 2
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            return "在你使用一张元素牌后，使一个被使用的元素之外的友方元素获得+2/+1。"
        }
        
    }
      