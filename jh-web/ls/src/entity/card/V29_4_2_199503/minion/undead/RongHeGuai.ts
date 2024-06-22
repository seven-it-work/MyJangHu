
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_033t_battlegroundsImage.png
      */
      export default class RongHeGuai extends BaseCard {
         name = "融合怪"
         ethnicity = ["亡灵","鱼人","恶魔","机械","元素","野兽","海盗","龙","野猪人","纳迦"]
         attack = 2
         life = 2
         graded = 1
         cardType = "minion"

         

         descriptionStr() {
            return "<b>烈毒</b>"
        }
        
    }
