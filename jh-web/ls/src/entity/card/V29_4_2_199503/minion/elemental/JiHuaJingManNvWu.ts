
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_013_battlegroundsImage.png
      */
      export default class JiHuaJingManNvWuV29_4_2_199503 extends BaseCard {
         name = "棘化荆蔓女巫"
         ethnicity = ["元素","野猪人"]
         attack = 4
         life = 4
         graded = 5
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "当本随从攻击时，将攻击目标的属性值变为3/3。<i>（每场战斗限两次）</i>"
            }
            return "当本随从攻击时，将攻击目标的属性值变为3/3。<i>（每场战斗限一次）</i>"
         }
    }
