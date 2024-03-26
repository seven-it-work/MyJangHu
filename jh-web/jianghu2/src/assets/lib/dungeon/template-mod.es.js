import { openBlock as n, createElementBlock as p } from "vue";
const s = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [c, r] of o)
    e[c] = r;
  return e;
}, a = {
  props: {
    gameApi: {
      type: Object,
      default: {}
    }
  }
};
function _(t, o, e, c, r, d) {
  return n(), p("div", null, " 自定义mod ");
}
const l = /* @__PURE__ */ s(a, [["render", _]]);
export {
  l as MyMode
};
