
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG25_309_battlegroundsImage.png
      */
      export default class DaJiSaSiJiangJunV29_4_2_199503 extends BaseCard {
         name = "达基萨斯将军"
         ethnicity = ["龙"]
         attack = 2
         life = 8
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>获取两张2/1并具有“<b>战吼：</b>使一条龙获得+5攻击力”的燃翼。"
            }
            return "<b>战吼：</b>获取一张2/1并具有“<b>战吼：</b>使一条龙获得+5攻击力”的燃翼。"
         }
    }
      