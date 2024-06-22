
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_740_battlegroundsImage.png
      */
      export default class QiangNengLaoGongV29_4_2_199503 extends BaseCard {
         name = "强能劳工"
         ethnicity = ["机械","恶魔"]
         attack = 3
         life = 8
         graded = 5
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>复仇（4）：</b>随机获取2张机械-恶魔牌。"
            }
            return "<b>复仇（4）：</b>随机获取一张机械-恶魔牌。"
         }
    }
