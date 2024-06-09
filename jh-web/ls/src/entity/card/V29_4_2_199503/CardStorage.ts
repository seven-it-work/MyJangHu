import CardStorageMurloc from "./minion/murloc/CardStorageMurloc";
import CardStorageBeast from "./minion/beast/CardStorageBeast.ts";

const CardStorage = new Map<String, any>();


CardStorageMurloc.forEach((v, k) => {
    CardStorage.set(k, v)
})
CardStorageBeast.forEach((v, k) => {
    CardStorage.set(k, v)
})

export default CardStorage
