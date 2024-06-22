
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG23_353_battlegroundsImage.png
      */
      export default class BaoZangZhuiXunZheYiLiSiV29_4_2_199503 extends BaseCard {
         name = "宝藏追寻者伊莉斯"
         ethnicity = ["中立"]
         attack = 5
         life = 5
         graded = 4
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "在你<b>刷新</b>5次后，找到两尊<b>黄金</b>猿！<i>（还剩 次！）</i>"
            }
            return "在你<b>刷新</b>5次后，找到<b>黄金</b>猿！<i>（还剩 次！）</i>"
         }
    }
