<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Player",
  data() {
    return {
      activeKey: ['1'],
    }
  },
})
</script>

<template>
  <div>
    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel key="1" >
        <template #header>
          酒馆
          <a-button>升级</a-button>
          <span>当前等级:</span>
          <a-button>刷新</a-button>
          <a-button>冻结</a-button>
          <span>当前金币：10/10</span>
        </template>
        <a-row :gutter="16">
          <a-col v-for="i in 7" :key="i">
            <a-card hoverable style="width: 180px;" body-style="padding:10px">
              <template #actions>
                <span>攻击力：1</span>
                <span>
          <div>恶魔</div>
          <div>机械</div>
        </span>
                <span>生命值：1</span>
              </template>
              <a-card-meta>
                <template #title>
                  <a-avatar>3级</a-avatar>
                  小鬼
                  <a-button size="small">购买</a-button>
                </template>
                <template #description>
                  <a-tooltip placement="bottom" :title="'在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得+2/+1'">
                    <div style="width:160px;height:90px;">
                      <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow:hidden;">
                        在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得+2/+1
                      </p>
                    </div>
                  </a-tooltip>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="出场随从">
        <a-row :gutter="16">
          <a-col v-for="i in 7" :key="i">
            <a-card hoverable style="width: 180px;" body-style="padding:10px">
              <template #actions>
                <span>攻击力：1</span>
                <span>
          <div>恶魔</div>
          <div>机械</div>
        </span>
                <span>生命值：1</span>
              </template>
              <a-card-meta>
                <template #title>
                  <a-avatar>3级</a-avatar>
                  小鬼
                  <a-button size="small">出售</a-button>
                </template>
                <template #description>
                  <a-tooltip placement="bottom" :title="'在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得+2/+1'">
                    <div style="width:160px;height:90px;">
                      <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow:hidden;">
                        在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得+2/+1
                      </p>
                    </div>
                  </a-tooltip>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="手牌 数量：9/10">
        <a-row :gutter="16">
          <a-col v-for="i in 7" :key="i">
            <a-card hoverable style="width: 180px;" body-style="padding:10px">
              <template #actions>
                <span>攻击力：1</span>
                <span>
          <div>恶魔</div>
          <div>机械</div>
        </span>
                <span>生命值：1</span>
              </template>
              <a-card-meta>
                <template #title>
                  <a-avatar>3级</a-avatar>
                  小鬼
                  <a-button size="small">使用</a-button>
                </template>
                <template #description>
                  <a-tooltip placement="bottom" :title="'在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得+2/+1'">
                    <div style="width:160px;height:90px;">
                      <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;overflow:hidden;">
                        在你使用一张恶魔牌后，对你的英雄造成1点伤害，并获得+2/+1
                      </p>
                    </div>
                  </a-tooltip>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </a-collapse-panel>
      <a-collapse-panel key="4">
        <template #header>
          英雄
          当前生命:30
          当前护甲:30
          <a-button>结束回合</a-button>
        </template>
        <a-row>
          <a-col><a-button>使用</a-button></a-col>
          <a-col>技能描述：</a-col>
        </a-row>
      </a-collapse-panel>
    </a-collapse>



  </div>
</template>

<style scoped>

</style>