
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_303_battlegroundsImage.png
      */
      export default class BianZhuangDaoMuZeiV29_4_2_199503 extends BaseCard {
         name = "变装盗墓贼"
         ethnicity = ["中立"]
         attack = 4
         life = 4
         graded = 3
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>消灭一个友方亡灵以获取2张它的原始版复制。"
            }
            return "<b>战吼：</b>消灭一个友方亡灵以获取一张它的原始版复制。"
         }
    }
