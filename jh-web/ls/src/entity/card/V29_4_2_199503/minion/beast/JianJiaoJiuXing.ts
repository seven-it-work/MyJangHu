
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_808_battlegroundsImage.png
      */
      export default class JianJiaoJiuXingV29_4_2_199503 extends BaseCard {
         name = "尖角救星"
         ethnicity = ["野兽"]
         attack = 8
         life = 2
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b><b>嘲讽</b>。<b>复生</b></b> <b>亡语：</b>使你的随从获得+1生命值并对其造成1点伤害，触发两次。"
            }
            return "<b><b>嘲讽</b>。<b>复生</b></b> <b>亡语：</b>使你的随从获得+1生命值并对其造成1点伤害。"
         }
    }
      