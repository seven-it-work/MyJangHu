<template>
  <div class="container">
    <div class="content-container" ref="contentContainer">
      <div ref="content">
        <div v-for="(item,index) in messages" :key="index">
          <div class="message-prompt" v-if="isShowTimes[index]">
            {{ accordingToNow(item.time) }}
          </div>
          <div class="message-cell"
               :style="{ flexDirection: item.direction === 'received' ? 'row' : 'row-reverse' }">
            <a-avatar v-if="item.direction === 'received'"
                      :src="targetObj.src"
                      :shape="targetObj.shape || 'circle'">{{ targetObj.alt }}
            </a-avatar>
            <a-avatar v-else
                      :src="sourceObj.src"
                      :shape="targetObj.shape || 'circle'">{{ sourceObj.alt }}
            </a-avatar>
            <a-button type="default" size="small" round>{{ item.text }}</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <a-row v-if="answerOptions.length > 0">
        <a-col :span="20">
          <a-select
              style="width: 100%"
              v-model:value="answerOption"
              :field-names="{ label: 'text', value: 'id' }"
              :options="answerOptions"
          ></a-select>
        </a-col>
        <a-col :span="4">
          <a-button style="width: 100%" @click="sendText">发送</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import zhCode from 'date-fns/locale/zh-CN'
import format from 'date-fns/format'
import formatDistance from 'date-fns/formatDistance'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import differenceInYears from 'date-fns/differenceInYears'
import isSameDay from 'date-fns/isSameDay'
import {ref} from "vue";
import {randomList, randomUtil} from "@/random.js";

const conversationData = [{
  "id": "xxx1",
  "nextIdList": ["xxx2", "981fa63d-e6e6-4ba5-b65a-9ea8ef98db19"],
  "text": "你好",
  "direction": "received"
}, {
  "id": "xxx2",
  "nextIdList": ["6240df23-271c-4d70-bb50-904a649e4d63"],
  "text": "你好",
  "direction": "sent"
}, {
  "id": "981fa63d-e6e6-4ba5-b65a-9ea8ef98db19",
  "nextIdList": ["64134a9a-6502-4806-8f9a-985f6413f766"],
  "text": "好个屁",
  "direction": "sent"
}, {
  "id": "6240df23-271c-4d70-bb50-904a649e4d63",
  "nextIdList": ["db4e03e5-cd91-4696-ac0e-ef2ea33a35ec"],
  "text": "你是？",
  "direction": "received"
}, {
  "id": "64134a9a-6502-4806-8f9a-985f6413f766",
  "nextIdList": ["515e283a-1e4e-4346-9a46-67c0ca116caa", "7f626a53-24fc-4f65-b566-99bc1351fc43"],
  "text": "爷爷我心情不好",
  "direction": "sent"
}, {
  "id": "db4e03e5-cd91-4696-ac0e-ef2ea33a35ec",
  "nextIdList": ["75bc1ec9-f8c1-4140-81f0-7d49b3e26526"],
  "text": "我是你爷爷",
  "direction": "sent"
}, {
  "id": "75bc1ec9-f8c1-4140-81f0-7d49b3e26526",
  "nextIdList": ["64134a9a-6502-4806-8f9a-985f6413f766", "5aceeb87-fc0d-4110-b619-6cb3cc25037f"],
  "text": "你他妈的",
  "direction": "received"
}, {
  "id": "515e283a-1e4e-4346-9a46-67c0ca116caa",
  "nextIdList": ["5aceeb87-fc0d-4110-b619-6cb3cc25037f"],
  "text": "你好不好，干我屁事",
  "direction": "received"
}, {
  "id": "7f626a53-24fc-4f65-b566-99bc1351fc43",
  "nextIdList": ["7903ef04-cdb5-4fc6-b228-a358ab07d1ea"],
  "text": "我你妈",
  "direction": "received"
}, {
  "id": "5aceeb87-fc0d-4110-b619-6cb3cc25037f",
  "nextIdList": [],
  "text": "你在说一句",
  "direction": "sent"
}, {
  "id": "7903ef04-cdb5-4fc6-b228-a358ab07d1ea",
  "nextIdList": ["5aceeb87-fc0d-4110-b619-6cb3cc25037f"],
  "text": "傻逼东西，滚！",
  "direction": "received"
}]

export default {
  name: 'ChatBox',
  components: {},
  filters: {},
  props: {
    sourceObj: {
      type: Object,
      default() {
        return ref({alt: '', shape: 'circle', src: ''})
      }
    },
    targetObj: {
      type: Object,
      default() {
        return ref({alt: '', shape: 'circle', src: ''})
      }
    },
    loadHistory: {
      type: Function,
      default() {
        return []
      }
    },
  },
  created() {
    this.messages = this.loadHistory()
    this.updateSelectOptions()
  },
  data() {
    return {
      answerOption: '',
      answerOptions: [],
      messages: [],
      scrolledToBottom: false
    }
  },
  computed: {
    isShowTimes() {
      let lastTime = new Date(0)
      return this.messages.map(message => {
        const messageTime = message.time instanceof Date ? message.time : new Date(message.time)
        if (differenceInMinutes(messageTime, lastTime) > 10) {
          lastTime = messageTime
          return true
        } else {
          return false
        }
      })
    }
  },
  methods: {
    getDataByIdList(idList) {
      return conversationData.filter(item => idList.includes(item.id));
    },
    updateSelectOptions() {
      this.answerOption = ''
      const nextIdList = this.messages[this.messages.length - 1].nextIdList
      this.answerOptions = this.getDataByIdList(nextIdList) || []
    },
    accordingToNow(date) {
      date = date instanceof Date ? date : new Date(date)
      const now = new Date()
      if (differenceInMinutes(now, date) <= 30) {
        return formatDistance(new Date(date), now, {locale: zhCode, addSuffix: true})
      } else if (isSameDay(now, date)) {
        return format(date, 'p', {locale: zhCode})
      } else if (differenceInYears(now, date) < 1) {
        return format(date, 'MMM do p', {locale: zhCode})
      } else {
        return format(date, 'PPP p', {locale: zhCode})
      }
    },
    sendText() {
      let newMessage = []
      let answer = this.answerOptions.filter(item => item.id === this.answerOption)[0];
      if (!answer) {
        return
      }
      let nextMessage = {
        ...answer,
        direction: 'sent',
        time: new Date()
      }
      // 一直找，直到找到sent 和 nextId为多个的
      while (true) {
        newMessage.push(nextMessage)
        const nextIdList = nextMessage.nextIdList;
        if (!nextIdList || nextIdList.length === 0) {
          break
        } else if (nextIdList.length === 1) {
          // 继续查询
          nextMessage = conversationData.filter(item => item.id === nextMessage.nextIdList[0])[0];
        } else if (nextIdList.length > 1) {
          const nextDataList = conversationData.filter(item => nextIdList.includes(item.id));
          const aiSelect = nextDataList.filter(item => item.direction === 'received');
          if (aiSelect && aiSelect.length > 0) {
            nextMessage = randomList.randomFormList(aiSelect)
          }
          const playerSelect = nextDataList.filter(item => item.direction === 'sent');
          if (playerSelect && playerSelect.length > 0) {
            break;
          }
        }
      }
      this.messages.push(...newMessage)
      this.updateSelectOptions()
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content-container {
    flex-grow: 1;
    overflow-y: auto;
  }

  .footer {
    height: 50px;
  }
}

.message-cell {
  display: flex;
  padding: 2px;
  margin-bottom: 2px;

  > * {
    margin: 2px;
  }
}

.message-prompt {
  text-align: center;
  color: #969799;
  font-size: 14px;
  line-height: 24px;
}
</style>
