
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/GAME_005_imageFromHsJson256x.png
      */
      export default class XingYunBi extends BaseCard {
         name = "幸运币"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "spell"

         

         descriptionStr() {
            return "在本回合中，获得一个 法力水晶。"
        }
        
    }
      