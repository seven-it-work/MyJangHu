<template>
  <a-card hoverable style="width: 180px;" body-style="padding:10px"
          :style="cardObj.isFreeze?'border: 3px slateblue solid':''">
    <template #actions>
      <Tooltip :is-html="true" :disable="disableAttackTips(cardObj)"
               :title="attackTips(cardObj)">
        <div v-if="cardObj.baseCard.type==='随从'">攻击力：{{ cardObj.attack }}</div>
      </Tooltip>
      <div>
        <div v-for="str in cardObj.baseCard.ethnicity" :key="str">{{ str }}</div>
      </div>
      <Tooltip :is-html="true" :disable="disableLifeTips(cardObj)"
               :title="lifeTips(cardObj)">
        <div v-if="cardObj.baseCard.type==='随从'">生命值：{{ cardObj.life }}</div>
      </Tooltip>
    </template>
    <a-card-meta>
      <template #title>
        <div :style="cardObj.baseCard.isGold?'background: gold':''">
          <slot name="titleButton"></slot>
          <a-avatar>{{ cardObj.baseCard.graded }}级</a-avatar>
          <a-tooltip :title="cardObj.baseCard.name">{{ cardObj.baseCard.name }}</a-tooltip>
        </div>
      </template>
      <template #description>
        <div v-if="cardObj.baseCard.isHolyShield" style="position: absolute;left: 0px;bottom: -10px;">
          <a-tooltip placement="bottom" title="圣盾">
            <svg t="1715156325047" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1493" width="24" height="24">
              <path
                  d="M905.7 216.3c0-30.2-1.2-60-3.7-89.3-0.7-8.5-6.8-15.7-15.1-17.8C770.4 80 644 64 512 64s-258.4 16-375 45.3c-8.3 2.1-14.4 9.2-15.1 17.8-2.4 29.3-3.7 59.1-3.7 89.3 0 344.9 161.3 637.6 385.3 741.8 5.3 2.5 11.5 2.5 16.9 0 224-104.2 385.3-397 385.3-741.9z"
                  fill="#FFC200" p-id="1494"></path>
            </svg>
          </a-tooltip>
        </div>
        <div v-if="cardObj.baseCard.isHighlyToxic" style="position: absolute;left: 20px;bottom: -10px">
          <a-tooltip placement="bottom" title="剧毒">
            <svg t="1715156492788" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="5529" width="24" height="24">
              <path
                  d="M761.70752 415.60064v-91.4432H387.41504V416.8192c-69.48352 48-114.06848 121.9584-114.06848 204.98944 0 144.70144 135.25504 262.00576 302.1056 262.00576s302.1056-117.30432 302.1056-262.00576c-0.00512-83.73248-45.35296-158.23872-115.85024-206.208z"
                  fill="#BCE5E5" p-id="5530"></path>
              <path
                  d="M711.6032 331.15648H307.01056a16.04096 16.04096 0 0 1 0-32.08192h404.59264a16.04096 16.04096 0 0 1 0 32.08192z"
                  fill="#2E0C08" p-id="5531"></path>
              <path
                  d="M307.01056 391.76192a16.04096 16.04096 0 0 1-16.04096-16.04096V318.67904a16.04096 16.04096 0 0 1 32.08192 0v57.04192a16.04096 16.04096 0 0 1-16.04096 16.04096zM711.6032 391.76192a16.04096 16.04096 0 0 1-16.04096-16.04096V318.67904a16.04096 16.04096 0 1 1 32.08192 0v57.04192a16.04096 16.04096 0 0 1-16.04096 16.04096zM511.98464 913.98656c-183.7824 0-333.29664-129.13152-333.29664-287.84128 0-86.46656 44.45184-167.56736 121.9584-222.52032a16.04608 16.04608 0 0 1 18.56 26.17344c-68.91008 48.86016-108.43648 120.42752-108.43648 196.352 0 141.02528 135.12704 255.75936 301.21472 255.75936s301.21472-114.73408 301.21472-255.75936c0-75.95008-39.4752-147.51744-108.30336-196.352a16.04096 16.04096 0 0 1 18.57024-26.16832c77.4144 54.93248 121.81504 136.03328 121.81504 222.5152 0 158.70976-149.51424 287.84128-333.29664 287.84128zM397.91104 283.0336c-26.53184 0-48.12288-21.59104-48.12288-48.12288 0-26.53184 21.59104-48.12288 48.12288-48.12288a47.7184 47.7184 0 0 1 18.74944 3.79904 10.69056 10.69056 0 1 1-8.35584 19.6864 26.76736 26.76736 0 0 0-37.13024 24.63744 26.7776 26.7776 0 0 0 26.73664 26.74176 26.77248 26.77248 0 0 0 26.73664-26.74176 10.69056 10.69056 0 0 1 21.38624 0c0 26.53184-21.59104 48.12288-48.12288 48.12288zM516.06528 176.1024l-0.70144-0.01024c-20.45952 0-37.248-16.78848-37.248-37.4272s16.78848-37.43232 37.4272-37.43232c20.6336 0 37.43232 16.78848 37.43232 37.43232 0 5.06368-0.98816 9.96864-2.95424 14.592-2.99008 8.17152-13.7728 22.84544-33.95584 22.84544z m-0.52224-53.4784a16.06144 16.06144 0 0 0-16.04096 16.04096 16.05632 16.05632 0 0 0 16.04096 16.04096l0.52224 0.00512c10.0352 0 13.73696-8.4992 14.1312-9.46176a16.5888 16.5888 0 0 0 1.38752-6.58432 16.06144 16.06144 0 0 0-16.04096-16.04096z"
                  fill="#2E0C08" p-id="5532"></path>
              <path
                  d="M583.70048 450.57536a16.04096 16.04096 0 0 1-16.04096-16.04096V320.4608a16.04096 16.04096 0 1 1 32.08192 0v114.0736a16.04096 16.04096 0 0 1-16.04096 16.04096zM651.00288 416.71168a16.04608 16.04608 0 0 1-16.04608-16.04096v-85.5552a16.04096 16.04096 0 1 1 32.08704 0v85.55008a16.04096 16.04096 0 0 1-16.04096 16.04608zM818.56 572.01664h-98.04288a16.04096 16.04096 0 1 1 0-32.08704h98.04288a16.04096 16.04096 0 1 1 0 32.08704zM829.24032 635.93984h-160.4096a16.04096 16.04096 0 1 1 0-32.08704h160.4096a16.04096 16.04096 0 1 1 0 32.08704zM819.56864 709.0176H734.7712a16.04096 16.04096 0 1 1 0-32.08192h84.79744a16.04096 16.04096 0 1 1 0 32.08192z"
                  fill="#2E0C08" p-id="5533"></path>
            </svg>
          </a-tooltip>
        </div>
        <div v-if="cardObj.baseCard.isMockery" style="position: absolute;left: 40px;bottom: -10px">
          <a-tooltip placement="bottom" title="嘲讽">
            <svg t="1715157463736" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="10924" data-spm-anchor-id="a313x.search_index.0.i6.76343a81TWeNuC" width="27" height="27">
              <path
                  d="M778.24 194.56H245.76a10.24 10.24 0 0 0-10.24 10.24v225.93536c3.66592 175.18592 110.67392 331.35616 272.52736 397.9264a10.24 10.24 0 0 0 7.7824 0A440.07424 440.07424 0 0 0 788.48 430.96064V204.8a10.24 10.24 0 0 0-10.24-10.24z m-10.24 20.48v215.69536l-0.13312 4.99712c-5.3248 161.28-102.94272 305.2544-250.624 370.08384l-5.30432 2.28352-0.7168-0.3072A419.5328 419.5328 0 0 1 256 430.53056V215.04h512z"
                  fill="#202020" p-id="10925"></path>
            </svg>
          </a-tooltip>
        </div>
        <div v-if="cardObj.baseCard.isRebirth" style="position: absolute;left: 60px;bottom: -10px">
          <a-tooltip placement="bottom" title="复生">
            <svg t="1715157954485" class="icon" viewBox="0 0 1025 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="15509" width="24" height="24">
              <path
                  d="M829.951095 762.158409c-28.579595 0-51.759625-23.18003-51.759625-51.759625V365.000594c0-131.287254-106.802881-238.094275-238.094275-238.094275h-91.353668c-131.287254 0-238.094275 106.807022-238.094275 238.094275v345.40233c0 28.583735-23.17589 51.759625-51.759625 51.759625s-51.759625-23.17589-51.759625-51.759625V365.000594c0-188.367768 153.245757-341.613525 341.613525-341.613525h91.353668c188.363628 0 341.613525 153.245757 341.613525 341.613525v345.40233c0 28.583735-23.17589 51.755484-51.759625 51.755485z"
                  p-id="15510"></path>
              <path
                  d="M500.776443 997.018743c-116.844248 0-211.903905-81.937557-211.903905-182.653506v-130.893881c0-28.579595 23.17589-51.759625 51.759625-51.759625s51.759625 23.18003 51.759625 51.759625v130.893881c0 42.894236 49.63541 79.134256 108.384655 79.134256s108.384655-36.240019 108.384655-79.134256v-130.893881c0-28.579595 23.17589-51.759625 51.759625-51.759625 28.579595 0 51.759625 23.18003 51.759625 51.759625v130.893881c0 100.715949-95.059657 182.653506-211.903905 182.653506z"
                  p-id="15511"></path>
              <path
                  d="M500.776443 839.11876c-28.583735 0-51.759625-23.18003-51.759625-51.759625v-103.891919c0-28.587876 23.17589-51.759625 51.759625-51.759626 28.587876 0 51.759625 23.171749 51.759625 51.759626v103.891919c0 28.587876-23.171749 51.759625-51.759625 51.759625zM390.768606 427.112145c-28.583735 0-51.759625-23.17589-51.759625-51.759626v-51.759625c0-28.583735 23.17589-51.759625 51.759625-51.759625s51.759625 23.17589 51.759625 51.759625v51.759625c0 28.583735-23.17589 51.759625-51.759625 51.759626zM601.947876 427.112145c-28.583735 0-51.759625-23.17589-51.759625-51.759626v-51.759625c0-28.583735 23.17589-51.759625 51.759625-51.759625 28.579595 0 51.759625 23.17589 51.759626 51.759625v51.759625c0 28.583735-23.18003 51.759625-51.759626 51.759626z"
                  p-id="15512"></path>
            </svg>
          </a-tooltip>
        </div>
        <a-tooltip placement="bottom">
          <template #title>
            <div v-html="cardObj.baseCard.description"></div>
          </template>
          <div style="width:160px;height:90px;">
            <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow:hidden;"
               v-html="cardObj.baseCard.description">
            </p>
          </div>
        </a-tooltip>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts">
import {PropType} from "@vue/runtime-core";
import BaseCardObj from "../objs/BaseCardObj";
import Tooltip from "./Tooltip.vue";
import {groupBy} from "lodash";
import randomUtil from "../utils/RandomUtils";
import Taverns from "../objs/Taverns";

export default {
  name: "Card",
  components: {Tooltip},
  props: {
    cardObj: {
      type: Object as PropType<BaseCardObj>,
      required: true,
    },
    taverns: {
      type: Object as PropType<Taverns>,
      required: false,
    },
  },
  methods: {
    disableAttackTips(cardObj: BaseCardObj) {
      return this.disableTips(cardObj, "attack")
    },
    disableLifeTips(cardObj: BaseCardObj) {
      return this.disableTips(cardObj, "life")
    },
    disableTips(cardObj: BaseCardObj, type: 'life' | 'attack') {
      let len = cardObj.baseCard.magneticForceList.length
      if (type === 'life') {
        len += cardObj.baseCard.lifeBonus.length
        len += this.taverns?.lifeBonus.length || 0
      }
      if (type === 'attack') {
        len += cardObj.baseCard.attackBonus.length
        len += this.taverns?.attackBonus.length || 0
      }
      return len <= 0
    },
    toolTips(cardObj: BaseCardObj, type: 'life' | 'attack') {
      let bonus = []
      const magneticForceList = cardObj.baseCard.magneticForceList.map(card => {
        return {
          markupValue: type === "life" ? card.life : card.attack,
          baseCardId: card.tempId || randomUtil.guid(),
          baseCardName: card.name,
        }
      })
      bonus.push(...magneticForceList);
      if (this.taverns) {
        if (type === "attack" && this.taverns.attackBonus) {
          bonus.push(...this.taverns.attackBonus)
        }
        if (type === 'life' && this.taverns.lifeBonus) {
          bonus.push(...this.taverns.lifeBonus)
        }
      }
      if (type === "life") {
        bonus.push(...cardObj.baseCard.lifeBonus)
      }
      if (type === "attack") {
        bonus.push(...cardObj.baseCard.attackBonus)
      }
      const result = groupBy(bonus, (card) => {
        return card.baseCardName
      })
      return Object.keys(result).map(key => {
        const number = result[key].map(data => data.markupValue).reduce((sum, data) => sum + data);
        return key + ":" + (number > 0 ? "+" : "-") + number
      })
    },
    attackTips(cardObj: BaseCardObj) {
      return this.toolTips(cardObj, 'attack')
    },
    lifeTips(cardObj: BaseCardObj) {
      return this.toolTips(cardObj, 'life')
    }
  }
}
</script>

<style scoped>

</style>
