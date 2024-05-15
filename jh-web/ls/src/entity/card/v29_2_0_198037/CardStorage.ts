const CardStorage = new Map<String, any>();
import CardStorageKyoma from "../kyoma/v29_2_0_198037/CardStorageKyoma.ts";

CardStorageKyoma.forEach((v, k) => {
    CardStorage.set(k, v)
})

export default CardStorage
