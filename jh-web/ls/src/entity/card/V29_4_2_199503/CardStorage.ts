import CardStorageMurloc from "./minion/murloc/CardStorageMurloc";
import CardStorageBeast from "./minion/beast/CardStorageBeast.ts";
import CardStorageDemon from "./minion/demon/CardStorageKyoma.ts";
import CardStorageSpell from "./spell/CardStorageSpell";

const CardStorage = new Map<String, any>();


CardStorageMurloc.forEach((v, k) => {
    CardStorage.set(k, v)
})
CardStorageBeast.forEach((v, k) => {
    CardStorage.set(k, v)
})
CardStorageDemon.forEach((v, k) => {
    CardStorage.set(k, v)
})
CardStorageSpell.forEach((v, k) => {
    CardStorage.set(k, v)
})

export default CardStorage
