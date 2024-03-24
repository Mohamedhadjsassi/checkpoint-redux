import { ADD_ACTION, DELETE_ACTION, FILTER_ACTION, UPDATE_ACTION, UPDATE_ACTION2 } from "./ActionType"

const postsReducer=(stat=[],action)=>{
    switch(action.type){
        case ADD_ACTION:return[...stat,action.payload]
        case DELETE_ACTION:return stat.filter((post)=>post.id != action.payload)
        case UPDATE_ACTION:return stat.map((post)=>post.id == action.payload ?{...post,status:!post.status}:post)
        case UPDATE_ACTION2:return stat.map((post)=>post.id == action.payload.id ?{...post,name:action.payload.change}:post)
        case FILTER_ACTION:return  action.payload?stat.sort((post1,post2)=>post1.status-post2.status): stat.sort((post1,post2)=>post2.status-post1.status)         
        default : return stat
    }
   
 
    }
    export default postsReducer