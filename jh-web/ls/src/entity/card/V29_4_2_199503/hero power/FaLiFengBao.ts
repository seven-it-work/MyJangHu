
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HP_054_battlegroundsImage.png
      */
      export default class FaLiFengBao extends BaseCard {
         name = "法力风暴"
         
         attack = 0
         life = 0
         graded = 1
         cardType = "hero power"

         

         descriptionStr() {
            return "<b>被动</b> 购买随从和<b>刷新</b>的消耗改为（2）枚铸币。升级酒馆所需的铸币增加（1）枚。"
        }
        
    }
      