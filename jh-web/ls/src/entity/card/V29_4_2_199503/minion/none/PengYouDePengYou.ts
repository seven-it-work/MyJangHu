
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG22_404_G_battlegroundsImage.png
      */
      export default class PengYouDePengYou extends BaseCard {
         name = "朋友的朋友"
         ethnicity = ["中立"]
         attack = 10
         life = 12
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            return "当你出售本随从时，<b>发现</b>2个伙伴。"
        }
        
    }
      