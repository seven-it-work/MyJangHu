
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_008_battlegroundsImage.png
      */
      export default class JiXieMuMaV29_4_2_199503 extends BaseCard {
         name = "机械木马"
         ethnicity = ["野兽","机械"]
         attack = 4
         life = 4
         graded = 4
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>亡语：</b>召唤两个4/4并具有“<b>亡语：</b>召唤一个2/2的机械马驹”的机械小马。"
            }
            return "<b>亡语：</b>召唤两个2/2并具有“<b>亡语：</b>召唤一个1/1的机械马驹”的机械小马。"
         }
    }
      