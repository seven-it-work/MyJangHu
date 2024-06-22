
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_537_battlegroundsImage.png
      */
      export default class BinFenBingLingV29_4_2_199503 extends BaseCard {
         name = "缤纷冰灵"
         ethnicity = ["元素"]
         attack = 2
         life = 1
         graded = 5
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "在本局对战中，你每使用过一张元素牌，便拥有+4/+2<i>（无论本随从在哪）</i>。"
            }
            return "在本局对战中，你每使用过一张元素牌，便拥有+2/+1<i>（无论本随从在哪）</i>。"
         }
    }
