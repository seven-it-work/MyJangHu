import {SystemTimeObj} from "./SystemTimeObj";
import {WorldObj} from "./WorldObj";
import {CityObj} from "./CityObj";
import {SceneObj} from "./SceneObj";
import {PeopleObj} from "./PeopleObj";

export interface CoreContext {
    currentPeople?: PeopleObj;
    systemTimeObj: SystemTimeObj;
    worldMap: Map<string, WorldObj>;
    cityMap: Map<string, CityObj>;
    sceneMap: Map<string, SceneObj>;
    peopleMap: Map<string, PeopleObj>;
    time:number;
}
