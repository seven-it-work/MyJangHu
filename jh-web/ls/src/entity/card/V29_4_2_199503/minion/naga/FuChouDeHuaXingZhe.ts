
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_631_battlegroundsImage.png
      */
      export default class FuChouDeHuaXingZheV29_4_2_199503 extends BaseCard {
         name = "复仇的滑行者"
         ethnicity = ["纳迦","亡灵"]
         attack = 5
         life = 1
         graded = 3
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b>塑造法术：</b>直到下个回合，使你的随从获得+2生命值。其中在下一场战斗中死亡的随从可永久获得此增益！"
            }
            return "<b>塑造法术：</b>直到下个回合，使你的随从获得+1生命值。其中在下一场战斗中死亡的随从可永久获得此增益！"
         }
    }
