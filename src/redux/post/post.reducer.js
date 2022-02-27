import { addLikeReducer, deletePostReducer, editPostReducer } from "../../components/Utils";
import { ADD_LIKE, ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS } from "./post.action";

const INITIAL_STATE = {
    posts:undefined,
    isPostsLoading:true
};

const postReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_POSTS:
            return {
                posts:action.payload,
                isPostsLoading:false
            }

        case ADD_POST:
            return{
                posts:[action.payload, ...state.posts]
            }

        case EDIT_POST:
            return{
                posts:editPostReducer(state.posts, action.payload)
            }

        case DELETE_POST:
            return {
                posts: deletePostReducer(state.posts, action.payload)
            }

        case ADD_LIKE:
            return{
                posts:addLikeReducer(state.posts, action.payload)   
            }

        default:
            return state
    }
}

export default postReducer;