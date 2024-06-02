
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_056_battlegroundsImage.png
      */
      export default class YuanZheShangGou extends BaseCard {
         name = "愿者上钩"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 在你出售5个随从后，随机获取一个鱼人。<i>（还剩 个！）</i>"
        }
        
    }
      