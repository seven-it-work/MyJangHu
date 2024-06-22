
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_040_battlegroundsImage.png
      */
      export default class HuiShouMoLingV29_4_2_199503 extends BaseCard {
         name = "回收魔灵"
         ethnicity = ["元素"]
         attack = 5
         life = 4
         graded = 4
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "在你使用一张元素牌后，你下两次<b>刷新</b>酒馆的消耗减少（1）枚铸币。"
            }
            return "在你使用一张元素牌后，你下一次<b>刷新</b>酒馆的消耗减少（1）枚铸币。"
         }
    }
