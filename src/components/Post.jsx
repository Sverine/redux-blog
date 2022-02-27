import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deletePost, editdPost } from "../redux/post/post.action";
import Like from "./Like";

const Post = ({ post }) => {

  const dispatch = useDispatch();

  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent]= useState(post.content);

  const {user, isUserLoading} = useSelector((state)=>state.userReducer);

  const handleEdit = (e) => {
    e.preventDefault();

    const postData = {
      title:post.title,
      author:user[0].pseudo,
      content:editContent,
      likes:0,
      id:post.id
    }
    dispatch(editdPost(postData));
    setEditToggle(false);

  }

  return (
    <div className="post">
      {
        !isUserLoading && user[0].pseudo === post.author && (
          <div className="edit-delete">
            <img onClick={()=>setEditToggle(!editToggle)} src="./icons/edit.svg" alt="edit"/>
            <img onClick={()=>dispatch(deletePost(post.id))} src="./icons/delete.svg" alt="delete"/>
          </div>
        )
      }
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {
        editToggle?  
        <form onSubmit={(e)=>handleEdit(e)}>
          <textarea defaultValue={post.content} onChange={(e)=>setEditContent(e.target.value)}/>
          <input type="submit" value="Valider modification"/>
        </form>
        :<p> {post.content}</p>
      }

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;