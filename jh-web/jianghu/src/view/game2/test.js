import {PeopleEntity, createPeople, SEX} from "@/view/game2/entity/PeopleEntity";

const peopleEntity1 = createPeople({
    name: "张三",
    birth: 123,
    sex: SEX.WOMAN,
});
const peopleEntity2 = createPeople({
    name: "李四",
    birth: 123,
    sex: SEX.WOMAN,
});

export default {}
