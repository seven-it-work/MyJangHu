import XianXueBaoShi from "./XianXueBaoShi.ts";
import Sanlian from "./Sanlian.ts";
import Coin from "./Coin.ts";

const CardStorageSpell = new Map<String, any>();

CardStorageSpell.set("XianXueBaoShi", XianXueBaoShi);
CardStorageSpell.set("Sanlian", Sanlian);
CardStorageSpell.set("Coin", Coin);

export default CardStorageSpell
