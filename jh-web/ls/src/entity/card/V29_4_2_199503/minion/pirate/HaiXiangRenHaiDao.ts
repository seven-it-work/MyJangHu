
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/TB_BaconShop_HERO_18_Buddy_imageFromHsJson512x.png
      */
      export default class HaiXiangRenHaiDaoV29_4_2_199503 extends BaseCard {
         name = "海象人海盗"
         ethnicity = ["海盗"]
         attack = 4
         life = 4
         graded = 5
         cardType = "minion"

         

         descriptionStr() {
            return "<b>战吼：</b>在本局对战中你每使用过一张海盗牌，使一个随从获得+1/+1。"
        }
        
    }
