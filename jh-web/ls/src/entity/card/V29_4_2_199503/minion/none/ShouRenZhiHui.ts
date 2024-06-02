
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BGDUO_119_battlegroundsImage.png
      */
      export default class ShouRenZhiHuiV29_4_2_199503 extends BaseCard {
         name = "兽人指挥"
         ethnicity = ["中立"]
         attack = 4
         life = 4
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>战吼：</b>使一个随从获得+ /+ <i>（在本局对战中，你的队伍每使用过一张兽人指挥都会升级）</i>。"
            }
            return "<b>战吼：</b>使一个随从获得+ /+ <i>（在本局对战中，你的队伍每使用过一张兽人指挥都会升级）</i>。"
         }
    }
      