import { ADD_TASK, CHANGE_ISDONE,DELETE_TASKS, EDIT_TASK} from "../actionsType/actionsType";

export const addTask=(payload)=>{
    return {type: ADD_TASK , payload};
}
export const changeIsDone=(payload)=>{
    return {type: CHANGE_ISDONE , payload};
}

export const deleteTasks=(payload)=>{
    return {type: DELETE_TASKS , payload};
}
export const editTask=(payload)=>{
    return {type: EDIT_TASK , payload};
}
