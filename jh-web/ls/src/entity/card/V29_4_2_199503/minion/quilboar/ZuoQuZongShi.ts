
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_157_battlegroundsImage.png
      */
      export default class ZuoQuZongShiV29_4_2_199503 extends BaseCard {
         name = "作曲鬃师"
         ethnicity = ["野猪人"]
         attack = 3
         life = 10
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>复仇（2）：</b>对你的所有野猪人各使用4张<b>鲜血宝石</b>。"
            }
            return "<b>复仇（2）：</b>对你的所有野猪人各使用2张<b>鲜血宝石</b>。"
         }
    }
      