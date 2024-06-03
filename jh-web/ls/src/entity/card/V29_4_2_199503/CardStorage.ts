import CardStorageMurloc from "./minion/murloc/CardStorageMurloc";

const CardStorage = new Map<String, any>();


CardStorageMurloc.forEach((v, k) => {
    CardStorage.set(k, v)
})
export default CardStorage
