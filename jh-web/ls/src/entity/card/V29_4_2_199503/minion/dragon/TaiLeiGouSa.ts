
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG21_015_battlegroundsImage.png
      */
      export default class TaiLeiGouSa extends BaseCard {
         name = "泰蕾苟萨"
         ethnicity = ["龙"]
         attack = 4
         life = 4
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            return "本随从可永久保留战斗阶段受到的你的附加效果。"
        }
        
    }
