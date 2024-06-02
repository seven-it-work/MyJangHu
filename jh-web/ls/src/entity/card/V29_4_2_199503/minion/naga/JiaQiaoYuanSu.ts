
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_879_battlegroundsImage.png
      */
      export default class JiaQiaoYuanSuV29_4_2_199503 extends BaseCard {
         name = "甲壳元素"
         ethnicity = ["纳迦","元素"]
         attack = 5
         life = 4
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b>选择一个酒馆中的随从，随机使一个友方随从获得选中随从的双倍属性值。"
            }
            return "<b>塑造法术：</b>选择一个酒馆中的随从，随机使一个友方随从获得选中随从的属性值。"
         }
    }
      