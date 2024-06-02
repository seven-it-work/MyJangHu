
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGS_021_battlegroundsImage.png
      */
      export default class XiongMaMa extends BaseCard {
         name = "熊妈妈"
         ethnicity = ["野兽"]
         attack = 4
         life = 4
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            return "每当你召唤一只野兽，使其获得+4/+4。"
        }
        
    }
      