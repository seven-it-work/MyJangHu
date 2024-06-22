
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG24_715_battlegroundsImage.png
      */
      export default class NaiXinDeZhenChaYuanV29_4_2_199503 extends BaseCard {
         name = "耐心的侦查员"
         ethnicity = ["中立"]
         attack = 1
         life = 1
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "当你出售本随从时，<b>发现</b>两个等级 的随从。<i>（每回合都会升级！）</i>"
            }
            return "当你出售本随从时，<b>发现</b>一个等级 的随从。<i>（每回合都会升级！）</i>"
         }
    }
