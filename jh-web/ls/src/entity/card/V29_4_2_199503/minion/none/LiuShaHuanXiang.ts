
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_125_battlegroundsImage.png
      */
      export default class LiuShaHuanXiangV29_4_2_199503 extends BaseCard {
         name = "流沙幻象"
         ethnicity = ["中立"]
         attack = 1
         life = 1
         graded = 7
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b>变形成为你的队友生命值最高的随从的金色复制。"
            }
            return "<b>战斗开始时：</b>变形成为你的队友生命值最高的随从的复制。"
         }
    }
