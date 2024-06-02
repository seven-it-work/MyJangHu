
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_600_battlegroundsImage.png
      */
      export default class FanJianLingJianV29_4_2_199503 extends BaseCard {
         name = "翻捡零件"
         
         attack = 0
         life = 0
         graded = 4
         cardType = "tavern"

         

         descriptionStr() {
            return "在你的回合结束时，随机获取一个<b>磁力</b>随从。持续3回合。"
        }
        
    }
      