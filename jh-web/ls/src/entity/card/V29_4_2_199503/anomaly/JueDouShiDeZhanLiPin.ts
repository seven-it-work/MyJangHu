
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_715_battlegroundsImage.png
      */
      export default class JueDouShiDeZhanLiPinV29_4_2_199503 extends BaseCard {
         name = "角斗士的战利品"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "在战斗后，如果你获胜，<b>发现</b>一张你当前等级的随从牌；否则随机获取一张低一级的随从牌。"
        }
        
    }
      