<template>
  <a-modal :open="open" @cancel="cancel">
    <div v-for="(item,index) in chatData.history" :key="item.id" class="chat">
      <a-row :class="item.type">
        <a-col :span="2">
          <a-avatar>{{ item.peopleObj.name }}</a-avatar>
        </a-col>
        <a-col :span="22" v-html="item.context"></a-col>
      </a-row>
    </div>
    <br>
    <a-row :class="currentMessageData.type" v-if="currentMessageData.id">
      <a-col :span="2">
        <a-avatar>{{ currentMessageData.peopleObj.name }}</a-avatar>
      </a-col>
      <a-col :span="22" v-html="currentMessageData.context"></a-col>
    </a-row>
    <template #footer>
      <a-button>跳过</a-button>
      <a-button @click="next">下一个</a-button>
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
  data() {
    return {
      currentMessageData: {
        peopleObj: {}
      },
      chatIdMap: {}
    }
  },
  methods: {
    init() {
      const messageData = this.chatData.messageData;
      for (let i = 0; i < messageData.length; i++) {
        const item = messageData[i]
        if (item.id === this.chatData.nowMessageId) {
          this.currentMessageData = item;
        }
        this.chatIdMap[item.id] = item
      }
    },
    cancel() {
      this.$emit('update:open', false)
    },
    setCurrentMessageData(data){
      this.chatData.history.push(this.currentMessageData)
      this.currentMessageData =data
    },
    next() {
      debugger
      if (!this.currentMessageData.nextIdList){
        console.log("没有下一个")
        return
      }
      if (this.currentMessageData.nextIdList.length === 0) {
        // 没了
        console.log("没了")
        this.cancel()
      } else if (this.currentMessageData.nextIdList.length === 1) {
        this.setCurrentMessageData(this.chatIdMap[this.currentMessageData.nextIdList[0]])
      } else {
        const nextMessage = this.currentMessageData.nextIdList.map(id => this.chatIdMap[id])
        if (nextMessage.length > 0) {
          const nextMessageElement = nextMessage[0];
          if (nextMessageElement.type === 'other') {
            // ai 随机选择
            this.setCurrentMessageData(randomList.randomFormList(nextMessage))
          } else if (nextMessageElement.type === 'me') {
            // 需要玩家选择
          } else {
            // 不支持类型
          }
        } else {
          // 没了 或者数据有问题
        }
      }
    },
  },
  created() {
    this.init()
  },
}
</script>

<style lang="less" scoped>
.chat {
  display: flex;

  .other {
    flex-direction: row;
  }

  .me {
    flex-direction: row-reverse;
  }
}
</style>
