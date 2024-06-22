
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_016_battlegroundsImage.png
      */
      export default class XinDuoLeiZhiSheShouV29_4_2_199503 extends BaseCard {
         name = "辛多雷直射手"
         ethnicity = ["中立"]
         attack = 3
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>风怒</b>，<b>圣盾</b>。每当本随从攻击时，移除目标的<b>复生</b>和<b>嘲讽</b>。"
            }
            return "<b>风怒</b>，<b>圣盾</b>。每当本随从攻击时，移除目标的<b>复生</b>和<b>嘲讽</b>。"
         }
    }
