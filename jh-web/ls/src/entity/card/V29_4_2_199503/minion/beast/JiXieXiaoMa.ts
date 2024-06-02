
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_008t_battlegroundsImage.png
      */
      export default class JiXieXiaoMa extends BaseCard {
         name = "机械小马"
         ethnicity = ["野兽","机械"]
         attack = 2
         life = 2
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>亡语：</b>召唤一个1/1的机械马驹。"
        }
        
    }
      