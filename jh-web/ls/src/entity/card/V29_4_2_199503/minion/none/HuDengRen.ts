
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_75_Buddy_imageFromHsJson512x.png
      */
      export default class HuDengRenV29_4_2_199503 extends BaseCard {
         name = "护灯人"
         ethnicity = ["中立"]
         attack = 3
         life = 5
         graded = 4
         cardType = "minion"



         descriptionStr() {
            return "在你的回合结束时，随机使一个友方随从获得等同于你当前等级的属性值。"
        }

    }
