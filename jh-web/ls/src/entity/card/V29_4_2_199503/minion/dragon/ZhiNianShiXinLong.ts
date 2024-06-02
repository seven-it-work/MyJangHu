
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_813_battlegroundsImage.png
      */
      export default class ZhiNianShiXinLongV29_4_2_199503 extends BaseCard {
         name = "执念诗心龙"
         ethnicity = ["龙"]
         attack = 2
         life = 3
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b><b>圣盾</b>。</b>相邻的龙在战斗阶段受到的你的附加效果翻倍，并可永久保留。"
            }
            return "<b><b>圣盾</b>。</b>相邻的龙可永久保留战斗阶段受到的你的附加效果。"
         }
    }
      