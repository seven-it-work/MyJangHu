
      // 将seven替换为路径
      import BaseCard from "../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_755t_battlegroundsImage.png
      */
      export default class SanLianJiangLi extends BaseCard {
         name = "三连奖励"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "<b>发现</b>一个等级 的暗月奖品。"
        }
        
    }
