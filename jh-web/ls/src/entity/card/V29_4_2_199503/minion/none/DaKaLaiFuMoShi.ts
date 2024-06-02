
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_ICC_901_battlegroundsImage.png
      */
      export default class DaKaLaiFuMoShiV29_4_2_199503 extends BaseCard {
         name = "达卡莱附魔师"
         ethnicity = ["中立"]
         attack = 1
         life = 5
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "你的回合结束效果会生效三次。"
            }
            return "你的回合结束效果会生效两次。"
         }
    }
      