
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG_DAL_775_battlegroundsImage.png
      */
      export default class KengDaoBaoPoShiV29_4_2_199503 extends BaseCard {
         name = "坑道爆破师"
         ethnicity = ["中立"]
         attack = 3
         life = 7
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽，亡语：</b>对所有随从造成3点伤害，触发两次。"
            }
            return "<b>嘲讽，亡语：</b>对所有随从造成3点伤害。"
         }
    }
      