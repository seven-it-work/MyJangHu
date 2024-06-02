
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_755_battlegroundsImage.png
      */
      export default class MaXiJiangPinV29_4_2_199503 extends BaseCard {
         name = "马戏奖品"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "三连不会奖励随从，改为<b>发现</b>一个<b>等级 </b>的暗月奖品。<i>（ 回合后提升！）</i> 三连不会奖励随从，改为<b>发现</b>一个<b>等级 </b>的暗月奖品。"
        }
        
    }
      