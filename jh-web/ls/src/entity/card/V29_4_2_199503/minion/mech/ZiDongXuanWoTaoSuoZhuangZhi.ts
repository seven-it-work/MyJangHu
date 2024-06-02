
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * https://battlegrounds.oss.gamerhub.cn/all_images/29.4.2.199503/BG28_635_battlegroundsImage.png
      */
      export default class ZiDongXuanWoTaoSuoZhuangZhiV29_4_2_199503 extends BaseCard {
         name = "自动漩涡套索装置"
         ethnicity = ["机械"]
         attack = 7
         life = 4
         graded = 6
         cardType = "minion"

         

         descriptionStr() {
            if(this.isGold){
                return "<b>圣盾</b>，<b>风怒</b> 每当本随从攻击时，随机获取2张酒馆法术牌。"
            }
            return "<b>圣盾</b>，<b>风怒</b> 每当本随从攻击时，随机获取一张酒馆法术牌。"
         }
    }
      