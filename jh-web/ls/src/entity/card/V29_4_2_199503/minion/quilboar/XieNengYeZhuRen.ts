
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_633_battlegroundsImage.png
      */
      export default class XieNengYeZhuRenV29_4_2_199503 extends BaseCard {
         name = "邪能野猪人"
         ethnicity = ["野猪人","恶魔"]
         attack = 2
         life = 6
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "在你施放2个法术后，吞食酒馆中的一个随从，获得其双倍属性值。<i>（还剩 个！）</i>"
            }
            return "在你施放2个法术后，吞食酒馆中的一个随从，获得其属性值。<i>（还剩 个！）</i>"
         }
    }
