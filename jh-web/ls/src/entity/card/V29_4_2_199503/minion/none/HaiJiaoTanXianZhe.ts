
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_016_battlegroundsImage.png
      */
      export default class HaiJiaoTanXianZheV29_4_2_199503 extends BaseCard {
         name = "海礁探险者"
         ethnicity = ["中立"]
         attack = 3
         life = 3
         graded = 4
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：发现</b>你尚未控制的一个类型的2张随从牌。"
            }
            return "<b>战吼：发现</b>你尚未控制的一个类型的一张随从牌。"
         }
    }
