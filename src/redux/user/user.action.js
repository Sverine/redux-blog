import axios from "axios"

export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUsers = () => dispatch =>{
    return axios.get("http://localhost:3000/users")
    .then((res) => {
        dispatch({
            type:GET_USER,
            payload:res.data
        })
    }).catch((error)=>console.log(error))
}

export const addUserLike = (userData) => dispatch => {
    return axios.put(`http://localhost:3000/users/${userData.id}`, userData)
    .then(()=>{
        dispatch({
            type:ADD_USER_LIKE,
            payload:userData
        })
    }).catch((error)=>console.log(error))
}