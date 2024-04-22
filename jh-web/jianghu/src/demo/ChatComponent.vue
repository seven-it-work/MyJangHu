<template>
  <a-modal :open="open" @cancel="cancel" class="chat">
    <div v-for="(item,index) in chatData.history" :key="item.id" >
      <a-row :class="item.data.type">
        <a-col>
          <a-avatar v-if="item.data.type==='me'">自己</a-avatar>
          <a-avatar v-if="item.data.type==='other'">{{ item.data.peopleObj.name }}</a-avatar>
        </a-col>
        <a-col v-html="item.data.context"></a-col>
      </a-row>
    </div>
    <a-row :class="currentNodeObj.data.type" v-if="currentNodeObj.id && currentNodeObj.data">
      <a-col>
        <a-avatar v-if="currentNodeObj.data.type==='me'">自己</a-avatar>
        <a-avatar v-if="currentNodeObj.data.type==='other'">{{ currentNodeObj.data.peopleObj.name }}</a-avatar>
      </a-col>
      <a-col>
        <div v-html="currentNodeObj.data.context"></div>
      </a-col>
    </a-row>
    <a-row class="me" v-if="selectNodeOptions.length">
      <a-col :span="2">
        <a-avatar>自己</a-avatar>
      </a-col>
      <a-col :span="22">
        <a-select style="width: 100%" v-model:value="selectNodeId">
          <a-select-option v-for="item in selectNodeOptions" :key="item.id" :value="item.id">
            {{ item.data.title }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <template #footer>
      <div v-if="selectNodeOptions.length">
        <a-button @click="confirm">确定</a-button>
      </div>
      <div v-else>
        <a-button>跳过</a-button>
        <a-button @click="next">下一个</a-button>
      </div>
    </template>
  </a-modal>
</template>

<script>

import {randomList} from "@/random.js";

export default {
  name: "ChatComponent",
  emits: ['update:open'],
  props: {
    chatData: {},
    open: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    "chatData.id": {
      handler() {
        this.init()
      }
    }
  },
  data() {
    return {
      currentNodeObj: {},
      selectNodeOptions: [],
      selectNodeId: "",
    }
  },
  methods: {
    init() {
      if (this.chatData && this.chatData.nodeMap) {
        const nodeMap = this.chatData.nodeMap
        this.currentNodeObj = nodeMap[this.chatData.startNodeId]
      }
      this.chatData.history = this.chatData.history || []
    },
    cancel() {
      this.$emit('update:open', false)
    },
    setCurrentMessageData(nodeData) {
      this.chatData.history.push(this.currentNodeObj)
      // console.log(this.chatData.history)
      this.currentNodeObj = nodeData
    },
    confirm() {
      this.setCurrentMessageData(this.chatData.nodeMap[this.selectNodeId])
      this.selectNodeOptions = []
      this.next()
    },
    next() {
      const nextNodeIds = this.currentNodeObj.nextNodeIds;
      const nodeMap = this.chatData.nodeMap
      if (!nextNodeIds) {
        // console.log("没有下一个")
        this.cancel()
        return
      }
      if (nextNodeIds.length <= 0) {
        // 没了
        // console.log("没了")
        this.cancel()
        return
      } else if (nextNodeIds.length === 1) {
        this.setCurrentMessageData(nodeMap[nextNodeIds[0]])
        return
      } else {
        const nextNode = nodeMap[nextNodeIds[0]]
        if (nextNode.data && nextNode.data.type === 'me') {
          // 提供选项
          this.selectNodeOptions = nextNodeIds.map(id => nodeMap[id])
          this.selectNodeId = nextNodeIds[0]
        } else if (nextNode.data && nextNode.data.type === 'other') {
          // ai 策略选择
          this.setCurrentMessageData(nodeMap[randomList.randomFormList(nextNodeIds)])
        } else {
          // 有错误
          // console.log(nextNode)
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
.chat {
  width: 100%;


  .other {
    flex-direction: row;
    text-align: left;
  }

  .me {
    flex-direction: row-reverse;
    text-align: right;
  }
}
</style>
