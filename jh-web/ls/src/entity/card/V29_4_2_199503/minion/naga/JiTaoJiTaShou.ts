
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_501_battlegroundsImage.png
      */
      export default class JiTaoJiTaShouV29_4_2_199503 extends BaseCard {
         name = "疾涛吉他手"
         ethnicity = ["纳迦"]
         attack = 1
         life = 1
         graded = 2
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b>直到下个回合，使一个随从获得等同于你当前等级两倍的属性值。"
            }
            return "<b>塑造法术：</b>直到下个回合，使一个随从获得等同于你当前等级的属性值。"
         }
    }
      