
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_800_battlegroundsImage.png
      */
      export default class MoRenBaoV29_4_2_199503 extends BaseCard {
         name = "魔刃豹"
         ethnicity = ["野兽"]
         attack = 4
         life = 1
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>召唤两只0/2并具有<b>嘲讽</b>的豹宝宝。"
            }
            return "<b>亡语：</b>召唤两只0/1并具有<b>嘲讽</b>的豹宝宝。"
         }
    }
      