import { ADD_USER_LIKE, GET_USER } from "./user.action";

const INITIAL_STATE = {
    isUserLoading:true,
    user:undefined
};

const userReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_USER:
            return{
                user:action.payload,
                isUserLoading:false
            }

        case ADD_USER_LIKE:
            return{
                user: [action.payload]
            }
        default:
            return state
    }
}

export default userReducer;