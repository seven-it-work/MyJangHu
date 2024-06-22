
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_071_battlegroundsImage.png
      */
      export default class PianZheJiQiRenV29_4_2_199503 extends BaseCard {
         name = "偏折机器人"
         ethnicity = ["机械"]
         attack = 3
         life = 2
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            return "<b>圣盾</b> 在战斗阶段中，每当你召唤一个机械，便获得+2攻击力和<b>圣盾</b>。"
        }
        
    }
