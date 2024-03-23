import { resolveComponent as a, openBlock as r, createElementBlock as d, Fragment as m, createVNode as l, withCtx as c, renderList as b, createBlock as D, createTextVNode as v, toDisplayString as y } from "vue";
const C = [{
  id: "2cabfad5cb5e42668c205663bdca2b6e",
  matrixMap: [
    [
      "",
      ""
    ],
    [
      "",
      ""
    ],
    [
      "",
      ""
    ],
    [
      "",
      ""
    ],
    [
      "",
      ""
    ]
  ],
  name: "诸钩境【mod】",
  description: "",
  entryCityId: "",
  createTime: "2024-03-18",
  updateTime: "2024-03-18",
  cityVoList: [],
  leftValue: 0,
  topValue: 0,
  showAble: !1
}], L = [], T = [], h = [], k = (n, o) => {
  const e = n.__vccOpts || n;
  for (const [p, s] of o)
    e[p] = s;
  return e;
}, x = {
  name: "ChatForm",
  inject: ["$api"],
  props: {
    nodeData: {}
  },
  data() {
    return {
      peopleList: []
    };
  },
  mounted() {
    this.$api.people.list(1, 999).then((n) => {
      this.peopleList = n.records;
    });
  },
  methods: {}
};
function A(n, o, e, p, s, F) {
  const u = a("a-input"), i = a("a-form-item"), _ = a("a-select-option"), f = a("a-select");
  return r(), d(m, null, [
    l(i, { label: "标题" }, {
      default: c(() => [
        l(u, {
          value: e.nodeData.title,
          "onUpdate:value": o[0] || (o[0] = (t) => e.nodeData.title = t)
        }, null, 8, ["value"])
      ]),
      _: 1
    }),
    l(i, { label: "人" }, {
      default: c(() => [
        l(f, {
          value: e.nodeData.componentKey,
          "onUpdate:value": o[1] || (o[1] = (t) => e.nodeData.componentKey = t)
        }, {
          default: c(() => [
            (r(!0), d(m, null, b(s.peopleList, (t) => (r(), D(_, {
              key: t,
              value: t
            }, {
              default: c(() => [
                v(y(t.name), 1)
              ]),
              _: 2
            }, 1032, ["value"]))), 128))
          ]),
          _: 1
        }, 8, ["value"])
      ]),
      _: 1
    })
  ], 64);
}
const E = /* @__PURE__ */ k(x, [["render", A]]), w = {
  db: {
    world: C,
    city: L,
    people: T,
    scene: h
  },
  components: {
    chat: {
      CORE_CHAT_DEFAULT: {
        key: "CORE_CHAT_DEFAULT",
        name: "默认对话表单",
        component: E
      }
    }
  }
};
export {
  w as default
};
