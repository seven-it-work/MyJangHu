
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG26_502_battlegroundsImage.png
      */
      export default class ShenChenLanTiaoGeShouV29_4_2_199503 extends BaseCard {
         name = "深沉蓝调歌手"
         ethnicity = ["纳迦"]
         attack = 2
         life = 2
         graded = 3
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b>直到下个回合，使一个随从获得+ /+ 。提升你此后的深沉蓝调效果。"
            }
            return "<b>塑造法术：</b>直到下个回合，使一个随从获得+ /+ 。提升你此后的深沉蓝调效果。"
         }
    }
