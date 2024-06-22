
      // 将seven替换为路径
      import BaseCard from "../../../../baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_Reward_518t_G_imageFromHsJson512x.png
      */
      export default class HaoWuYiZhuangDeMa extends BaseCard {
         name = "毫无异状的马"
         ethnicity = ["亡灵","鱼人","恶魔","机械","元素","野兽","海盗","龙","野猪人","纳迦"]
         attack = 100
         life = 100
         graded = 1
         cardType = "minion"



         descriptionStr() {
            return "<i>本随从拥有全部随从类型。</i>"
        }

    }
