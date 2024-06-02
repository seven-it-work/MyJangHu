
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_815_battlegroundsImage.png
      */
      export default class GuHuoJuLongYeZhiYanV29_4_2_199503 extends BaseCard {
         name = "骨火巨龙夜之魇"
         ethnicity = ["龙","亡灵"]
         attack = 6
         life = 3
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>嘲讽</b>。<b>亡语：</b> 随机使2个友方随从获得本随从的攻击力，触发两次。"
            }
            return "<b>嘲讽</b>。<b>亡语：</b>随机使2个友方随从获得本随从的攻击力。"
         }
    }
      