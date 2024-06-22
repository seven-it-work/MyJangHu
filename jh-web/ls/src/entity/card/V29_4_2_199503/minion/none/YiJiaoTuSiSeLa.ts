
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG27_081_battlegroundsImage.png
      */
      export default class YiJiaoTuSiSeLaV29_4_2_199503 extends BaseCard {
         name = "异教徒斯瑟拉"
         ethnicity = ["中立"]
         attack = 11
         life = 3
         graded = 6
         cardType = "minion"



         descriptionStr() {
            if(this.isGold){
                return "<b><b>潜行</b>。</b><b>亡语：</b>召唤你在本场战斗中死亡的前2个恶魔，保留其附加效果。"
            }
            return "<b><b>潜行</b>。</b><b>亡语：</b>召唤你在本场战斗中死亡的第一个恶魔，保留其附加效果。"
         }
    }
