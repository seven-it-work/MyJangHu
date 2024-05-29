<template>
  <a-button @click="oneClickFileGeneration">一键生成文件</a-button>
  <a-table :data-source="tableData" :columns="columns" :scroll="{ x: 1500 }">
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.editable">
        <div>
          <a-input v-if="column.inputType==='nameInput'" v-model:value="record[column.dataIndex]"
                   @change="changePinYin(record)"></a-input>
          <a-input-number v-else-if="column.inputType==='numberInput'"
                          v-model:value="record[column.dataIndex]"
                          :min="column.parameter.min"
                          :max="column.parameter.max"
                          :precision="column.parameter.precision"
                          :step="column.parameter.step"
          ></a-input-number>
          <a-select
              v-else-if="column.inputType==='select'"
              v-model:value="record[column.dataIndex]"
              :options="column.selectParameter.options"
              :mode="column.selectParameter.mode"
              style="width: 120px"
          ></a-select>
          <a-textarea
              v-else
              v-model:value="record[column.dataIndex]"
          />
        </div>
      </template>
    </template>
  </a-table>
</template>

<script>
import {cloneDeep} from "lodash";
import JSZip from "jszip";
import {saveAs} from 'file-saver';
import {pinyin} from 'pinyin-pro'
import {ethnicity} from "../../entity/baseCard.ts";
import axios from "axios";

/**
 * 去除空格
 * @param string
 * @return {string}
 */
function capitalizeFirstLetter(string) {
  return string.toLowerCase().replace(/\b[a-z]/g, function (match) {
    return match.toUpperCase();
  });
}

export default {
  name: "FileGenerator2",
  data() {
    return {
      fullData: {},
      tableData: [],
      columns: [
        {
          title: 'strId',
          dataIndex: 'strId',
          key: 'strId',
        },
        {
          title: '名称',
          dataIndex: 'nameCN',
          key: 'nameCN',
        },
        {
          title: '拼音',
          dataIndex: 'namePinYin',
          key: 'namePinYin',
        },
        {
          title: '描述',
          dataIndex: 'text',
          key: 'text',
        },
        {
          title: '等级',
          dataIndex: 'tier',
          key: 'tier',
        },
        {
          title: '生命值',
          dataIndex: 'health',
          key: 'health',
        },
        {
          title: '攻击力',
          dataIndex: 'attack',
          key: 'attack',
        },
        {
          title: '种族',
          dataIndex: 'minionTypesCN',
          key: 'minionTypesCN',
        },
        {
          title: '操作',
          dataIndex: 'operation',
          key: 'operation',
        },
      ],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get('/full_data.json')
          .then(response => {
            this.fullData = response.data.data
            this.tableData.push(
                ...this.fullData.heroPower,
                ...this.fullData.hero,
                ...this.fullData.companion,
                ...this.fullData.minion,
                ...this.fullData.tavern,
                ...this.fullData.quest,
                ...this.fullData.baconquestreward,
                ...this.fullData.anomaly,
            )
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
    },
    changePinYin(record) {
      record.namePinYin = this.chineseCharacterToPinyin(record.name)
    },
    chineseCharacterToPinyin(str) {
      // 替换特殊字符串
      return pinyin(str, {toneType: 'none', type: 'array'})
          .map(c => capitalizeFirstLetter(c))
          .join("")
          .replaceAll("！","")
          .replaceAll("，","")
          .replaceAll("·","")
          .replaceAll("ü","v")
          .replaceAll("（","")
          .replaceAll("）","")
    },
    generatingAFile(data) {
      const ethnicity=(data)=>{
        if (data.minionTypesCN && data.minionTypesCN.length>0){
          return `ethnicity = ["${(data.minionTypesCN || []).join("\",\"")}"]`
        }
        return ""
      }
      const armor=(data)=>{
        if (data.armor){
          return `armor = ${data.armor}`
        }
        return ""
      }
      const descriptionStr=(data)=>{
        if (data.goldText){
          return `descriptionStr() {
            if(this.isGold){
                return "${data.goldText || ''}"
            }
            return "${data.text || ''}"
         }`
        }
        return `descriptionStr() {
            return "${data.text || ''}"
        }
        `
      }
      return `
      // 将seven替换为路径
      import BaseCard from "seven/baseCard.ts";

      /**
      * ${data.img}
      */
      export default class ${data.namePinYin}${data.version||''} extends BaseCard {
         name = "${data.nameCN}"
         ${ethnicity(data)}
         attack = ${data.attack || 0}
         life = ${data.health || 0}
         graded = ${data.tier || 1}
         cardType = "${data.cardType}"

         ${armor(data)}

         ${descriptionStr(data)}
    }
      `
    },
    async oneClickFileGeneration() {
      try {
        const version="V"+this.fullData.version.replaceAll(".","_")
        const zip = new JSZip(); // 创建一个新的JSZip对象
        // 生成文件到zip中
        this.tableData.forEach(data => {
          const path=`${version}/${data.cardType}/${(data.minionTypes||[])[0]||''}/`
          data.namePinYin=this.chineseCharacterToPinyin(data.nameCN)
          data.version=version
          // 金色描述判断
          if (data.commonChildCards && data.commonChildCards.length>0){
            data.commonChildCards.forEach(ch=>{
              if (ch.strId===data.strId+"_G"){
                data.goldText=ch.text
              }else {
                ch.namePinYin=this.chineseCharacterToPinyin(ch.nameCN)
                zip.file(`${version}/${ch.cardType}/${(ch.minionTypes||[])[0]||''}/`+ch.namePinYin + ".ts", this.generatingAFile(ch));
              }
            })
          }

          zip.file(path+data.namePinYin + ".ts", this.generatingAFile(data));
        })
        // 生成ZIP文件的blob对象
        const content = await zip.generateAsync({type: 'blob'});
        // 使用file-saver触发文件下载
        saveAs(content, 'seven_' + (new Date().getTime()) + '.zip');
      } catch (error) {
        console.error('批量下载失败:', error);
      }
    },
    parsing() {
      try {
        this.dataJson=JSON.parse(this.jsonl)
      }catch (e){
        this.jsonl.split("}\n").forEach(str => {
          if (str) {
            const orcData = JSON.parse(str + "}");
            const orcStrList = orcData.data;
            // 一般而言第一个都是name
            const cloneDeep1 = cloneDeep(orcStrList);
            orcData.name = cloneDeep1.shift().text
            orcData.namePinYin = this.chineseCharacterToPinyin(orcData.name)
            // 剩余的就是描述
            orcData.description = cloneDeep1.map(temp => temp.text).join("")
            this.dataJson.push(orcData)
          }
        })
      }
    },
  }
}
</script>

<style scoped>

</style>
