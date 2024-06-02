
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_888_battlegroundsImage.png
      */
      export default class GeJuYiShuJiaV29_4_2_199503 extends BaseCard {
         name = "歌剧异术家"
         ethnicity = ["鱼人"]
         attack = 5
         life = 2
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>烈毒</b>。<b>亡语：</b>使2个友方鱼人获得<b>烈毒</b>。"
            }
            return "<b>烈毒</b>。<b>亡语：</b>使一个友方鱼人获得<b>烈毒</b>。"
         }
    }
      