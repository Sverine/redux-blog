import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addLike } from "../redux/post/post.action";
import { addUserLike } from "../redux/user/user.action";

const Like = ({ post }) => {

  const user = useSelector((state)=>state.userReducer.user)
  const dispatch = useDispatch()

  const handleLike = () =>{
    const postData = {
      title:post.title,
      author:post.author,
      content:post.content,
      likes:++post.likes,
      id:post.id
    }

    const userData = {
      pseudo: user[0].pseudo,
      likes:++user[0].likes,
      id:user[0].id
    }
    
    dispatch(addLike(postData));
    dispatch(addUserLike(userData));

  }

  
  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;