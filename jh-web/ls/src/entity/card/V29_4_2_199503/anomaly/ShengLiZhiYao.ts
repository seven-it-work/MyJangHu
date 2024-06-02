
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_Anomaly_753_battlegroundsImage.png
      */
      export default class ShengLiZhiYaoV29_4_2_199503 extends BaseCard {
         name = "胜利之钥"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "anomaly"

         

         descriptionStr() {
            return "在你使用一张随从牌后，你的其他随从每具有一个与其相同的<b>关键词</b>，便使你的其他随从获得+1/+1。"
        }
        
    }
      