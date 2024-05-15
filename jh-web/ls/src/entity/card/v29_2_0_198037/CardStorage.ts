const CardStorage = new Map<String, any>();
import CardStorageKyoma from "../kyoma/v28_0_0_189384/CardStorageKyoma.ts";
import CardStorageFishPeople from "../fishPeople/v28_0_0_189384/CardStorageFishPeople.ts";
import CardStorageMachine from "../machine/v28_0_0_189384/CardStorageMachine.ts";

CardStorageKyoma.forEach((v, k) => {
    CardStorage.set(k, v)
})
CardStorageFishPeople.forEach((v, k) => {
    CardStorage.set(k, v)
})
CardStorageMachine.forEach((v, k) => {
    CardStorage.set(k, v)
})
export default CardStorage
