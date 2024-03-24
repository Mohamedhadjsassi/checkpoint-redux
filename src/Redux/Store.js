import { createStore } from "redux"
import postsReducer from "./PostsReducer"

const Store=createStore(postsReducer,[])
export default Store