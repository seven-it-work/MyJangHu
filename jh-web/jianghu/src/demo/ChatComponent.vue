<template>
  <a-modal :open="open" @cancel="cancel">
    <div v-for="(item,index) in chatData.history" :key="item.id" class="chat">
      <a-row :class="item.type">
        <a-col :span="2">
          <a-avatar>{{ item.peopleObj.name }}</a-avatar>
        </a-col>
        <a-col :span="22" v-html="item.selectContext"></a-col>
      </a-row>
    </div>
    <a-row :class="currentMessageData.type" v-if="currentMessageData.id">
      {{ currentMessageData.type }}
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
    cancel() {
      this.$emit('update:open', false)
    },
    next() {
      if (this.currentMessageData.nextIdList.length === 0) {
        // 没了
      } else if (this.currentMessageData.nextIdList.length === 1) {
        this.currentMessageData = this.chatIdMap[this.currentMessageData.nextIdList[0]]
      } else {
        const nextMessage = this.currentMessageData.nextIdList.map(id => this.chatIdMap[id])
        const me = nextMessage.filter(item => item.type === 'me')
        const other = nextMessage.filter(item => item.type === 'other')
      }
      this.currentMessageData= {
        peopleObj: {}
      }
    },
  },
  mounted() {
    const messageData = this.chatData.messageData;
    for (let i = 0; i < messageData.length; i++) {
      const item = messageData[i]
      if (item.id === this.chatData.nowMessageId) {
        this.currentMessageData = item;
      }
      this.chatIdMap[item.id] = item
    }
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
