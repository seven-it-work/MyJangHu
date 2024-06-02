
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_038_battlegroundsImage.png
      */
      export default class XiangJiaoMingXing extends BaseCard {
         name = "香蕉明猩"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你的回合开始时，获取2根香蕉，并使其他所有人获得一根。"
        }
        
    }
      