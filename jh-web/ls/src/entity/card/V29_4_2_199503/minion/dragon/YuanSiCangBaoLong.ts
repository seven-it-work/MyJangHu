
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG29_872_battlegroundsImage.png
      */
      export default class YuanSiCangBaoLongV29_4_2_199503 extends BaseCard {
         name = "怨嗣藏宝龙"
         ethnicity = ["龙"]
         attack = 10
         life = 10
         graded = 6
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>战斗开始时：</b> 从生命值最高的敌方随从处偷取20/20的属性值。"
            }
            return "<b>战斗开始时：</b> 从生命值最高的敌方随从处偷取10/10的属性值。"
         }
    }
