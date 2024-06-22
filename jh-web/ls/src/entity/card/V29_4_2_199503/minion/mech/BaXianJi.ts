
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_611_battlegroundsImage.png
      */
      export default class BaXianJiV29_4_2_199503 extends BaseCard {
         name = "拔线机"
         ethnicity = ["机械"]
         attack = 1
         life = 1
         graded = 1
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>圣盾</b>。<b>亡语：</b>召唤一个2/2的微型机器人。"
            }
            return "<b>圣盾</b>。<b>亡语：</b>召唤一个1/1的微型机器人。"
         }
    }
