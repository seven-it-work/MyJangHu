<template>
  <a-modal v-model:visible="componentsData.visible" :keyboard="false" :mask-closable="false" :closable="false">
    <template #title>
      {{ componentsData.dataNowObj.peopleObj.name }}
    </template>
    <template #footer>
      <a-button @click="skipPlot"
                :disabled="componentsData.dataNowObj.selectItem && componentsData.dataNowObj.selectItem.length>0">
        跳过剧情
      </a-button>
      <a-button type="primary" @click="handleOk">
        下一个（{{ second }}秒）
      </a-button>
    </template>
    <div style="max-height: 100px;overflow-y: scroll">
      <a-row v-for="(data,index) in messageDataList" :key="index" style="margin-bottom: 10px">
        <a-col :span="20" v-if="index % 2 ===1">{{ data.message || data.selectResult }}</a-col>
        <a-col :span="4" v-if="index % 2 ===1">
          <a-avatar>{{ data.peopleObj.name }}</a-avatar>
        </a-col>
        <a-col :span="4" v-if="index % 2 ===0">
          <a-avatar>{{ data.peopleObj.name }}</a-avatar>
        </a-col>
        <a-col :span="20" v-if="index % 2 ===0">{{ data.message || data.selectResult }}</a-col>
      </a-row>
    </div>
    <div v-if="componentsData.dataNowObj.message">
      {{ componentsData.dataNowObj.message }}
    </div>
    <div v-if="componentsData.dataNowObj.selectItem && componentsData.dataNowObj.selectItem.length>0">
      <a-select style="width: 100%" :value="selectValue.id">
        <a-select-option v-for="item in componentsData.dataNowObj.selectItem" :key="item" :value="item.id">
          {{ item.name }}
        </a-select-option>
      </a-select>
    </div>
  </a-modal>
</template>

<script>
import {cloneDeep} from "lodash";

export default {
  name: "ChatBox",
  props: {
    componentsData: Object,
  },
  data() {
    return {
      second: 5,
      autoClick: null,
      messageDataList: [],
      selectValue: {
        id: ''
      },
    }
  },
  watch: {
    componentsData: {
      handler() {
        console.log("更新")
        this.messageDataList = []
        this.selectValue = {
          id: ''
        }
        this.second = 5
        if (this.autoClick) {
          clearInterval(this.autoClick);
        }
        this.autoClick = setInterval(() => {
          this.second = this.second - 1
          if (this.second === 0) {
            this.second = 5
            this.handleOk()
          }
        }, 1000)
      }
    }
  },

  methods: {
    skipPlot() {
      for (let i = 0; i < 999; i++) {
        const dataNowObj = this.componentsData.dataNowObj
        if (dataNowObj) {
          if (dataNowObj.selectItem && dataNowObj.selectItem.length > 0) {
            break
          } else {
            this.handleOk()
          }
        } else {
          this.handleCancel()
          break
        }
      }
    },
    handleOk() {
      this.second = 5
      if (this.selectValue && this.selectValue.id) {
        this.componentsData.dataNowObj.selectResult = this.selectValue.name
        this.selectValue = {
          id: ''
        }
      }
      this.messageDataList.push(cloneDeep(this.componentsData.dataNowObj))
      const nextId = this.componentsData.dataNowObj.nextId
      if (nextId) {
        this.componentsData.visible = true
        const nextObj = this.componentsData.data.filter(item => item.id === nextId)[0]
        if (nextObj) {
          this.componentsData.dataNowObj = nextObj
          if (this.componentsData.dataNowObj.selectItem && this.componentsData.dataNowObj.selectItem.length > 0) {
            this.selectValue = this.componentsData.dataNowObj.selectItem[0]
          }
        } else {
          this.handleCancel()
        }
      } else {
        this.handleCancel()
      }
    },
    handleCancel() {
      this.componentsData.visible = false
      if (this.autoClick) {
        clearInterval(this.autoClick);
      }
    },
  },
}
</script>

<style scoped>

</style>
