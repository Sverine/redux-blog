import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post"
import Spinner from "./components/Spinner";

const App = () => {

  const {posts,isPostsLoading} = useSelector((state)=>state.postReducer);
  const {user, isUserLoading} = useSelector((state)=>state.userReducer);


  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {
            isPostsLoading ? <Spinner/> 
            : posts.map((post, index)=><Post key={index} post={post}/>)
          }
        </div>
        {
          !isUserLoading && <User/>
        }
      </div>
    </div>
  );
};

export default App;