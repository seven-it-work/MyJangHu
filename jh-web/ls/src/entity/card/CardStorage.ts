import FenNuBianZhiZhe from "./FenNuBianZhiZhe";
import XiaoGui from "./XiaoGui";
import XiaoGuiQiuTu from "./XiaoGuiQiuTu";
import XieNengYuanSu from "./XieNengYuanSu";

const CardStorage = new Map<String, any>();
CardStorage.set(FenNuBianZhiZhe.name, FenNuBianZhiZhe)
CardStorage.set(XiaoGui.name, XiaoGui)
CardStorage.set(XiaoGuiQiuTu.name, XiaoGuiQiuTu)
CardStorage.set(XieNengYuanSu.name, XieNengYuanSu)
export default CardStorage
