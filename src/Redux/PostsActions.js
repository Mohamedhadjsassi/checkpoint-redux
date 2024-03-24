import { ADD_ACTION, DELETE_ACTION, FILTER_ACTION, UPDATE_ACTION, UPDATE_ACTION2 } from "./ActionType"


export const add=(action)=>{
    return {
        type:ADD_ACTION ,
        payload:action,
    }
}

export const deletepost=(Id)=>{
    return {
        type:DELETE_ACTION ,
        payload:Id,
    }
}

export const update=(Id)=>{
    return {
        type:UPDATE_ACTION ,
        payload:Id,
    }
}

export const updatename=(task)=>{
    return {
        type:UPDATE_ACTION2 ,
        payload:task,
    }
}

export const filtring=(SHOW)=>{
    return {
        type:FILTER_ACTION ,
        payload:SHOW,
    }
}