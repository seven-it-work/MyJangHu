
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_814_battlegroundsImage.png
      */
      export default class CuoChaoLongZaiV29_4_2_199503 extends BaseCard {
         name = "错巢龙崽"
         ethnicity = ["龙"]
         attack = 2
         life = 1
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b>获得等同于你当前等级双倍的属性值。"
            }
            return "<b>战斗开始时：</b>获得等同于你当前等级的属性值。"
         }
    }
      