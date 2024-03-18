import loginPeople from "@/vuex/loginPeople.js";
import {people} from "@/http/api.js";

export const updateCurrentPeople = (updateData) => {
    if (updateData.id !== loginPeople.state.peopleObj.id) {
        return
    }
   return  people.update(updateData).then(()=>{
       return  people.getById(updateData.id).then((res)=>{
            loginPeople.state.peopleObj=res
        })
    })
}
