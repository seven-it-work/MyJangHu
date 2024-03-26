<template>
  <a-row>
    <a-button @click="openDrawer(true)">新增地图</a-button>
  </a-row>
  <a-table :data-source="mapList" :columns="mapColumns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a-button @click="doUpdate(record)">更新</a-button>
        <a-button style="color: red" @click="doDelete(record)">删除</a-button>
      </template>
    </template>
  </a-table>
  <a-drawer v-model:open="open" width="50%">
    <MapForm ref="mapForm" :isAdd="isAdd" :submit-after="submitAfter" @cancel="closeDrawer"></MapForm>
  </a-drawer>
</template>

<script>
import {mapAPi} from "@/http/localApi.js";
import MapForm from "@/view/editor/component/MapForm.vue";
import {cloneDeep} from "lodash";

export default {
  name: "MapTab",
  props: {
    mapList: [],
    changeHook: {
      type: Function,
      default: () => {
      }
    }
  },
  components: {MapForm},
  methods: {
    submitAfter() {
      this.changeHook()
      this.closeDrawer()
    },
    closeDrawer() {
      this.open = false
    },
    openDrawer(isAdd) {
      this.open = true;
      this.isAdd = isAdd || false
    },
    doUpdate(item) {
      this.openDrawer(false)
      setTimeout(() => this.$refs.mapForm.$data.mapForm = cloneDeep(item), 200)
    },
    doDelete(item) {
      mapAPi.delete(item.id)
      this.changeHook();
    },
  },
  data() {
    return {
      isAdd: false,
      open: false,
      mapColumns: [
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: 50,
          ellipsis: true,
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
          ellipsis: true,
        },
        {
          title: '描述',
          dataIndex: 'description',
          key: 'description',
          ellipsis: true,
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
