
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_045_battlegroundsImage.png
      */
      export default class LuoHaoGuChuiShouV29_4_2_199503 extends BaseCard {
         name = "螺号鼓吹手"
         ethnicity = ["纳迦"]
         attack = 3
         life = 2
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>随机获取两张等级2的酒馆法术牌。"
            }
            return "<b>战吼：</b>随机获取一张等级2的酒馆法术牌。"
         }
    }
      