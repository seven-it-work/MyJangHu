<template>
  <div class="container">
    <div class="content-container" ref="contentContainer">
      <div ref="content">
        <div v-for="(item,index) in messageData" :key="index">
          <div class="message-cell"
               :style="{ flexDirection: item.type === 'received' ? 'row' : 'row-reverse' }">
            <a-avatar v-if="item.type === 'received'"
            >{{ item.title }}
            </a-avatar>
            <a-avatar v-else
            >{{ item.title }}
            </a-avatar>
            <a-button type="default" size="small" round>{{ item.context }}</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import differenceInMinutes from "date-fns/differenceInMinutes";
import formatDistance from "date-fns/formatDistance";
import zhCode from "date-fns/locale/zh-CN";
import isSameDay from "date-fns/isSameDay";
import format from "date-fns/format";
import differenceInYears from "date-fns/differenceInYears";

export default {
  name: "ChatComponent",
  props: {
    messageData: []
  },
  methods: {
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
  },
}
</script>

<style lang="less" scoped>
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
  padding-right: 20px;
  padding-left: 20px;
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
