// export const isEmpty = (value) => {
//     return (
//       value === undefined ||
//       value === null ||
//       (typeof value === "object" && Object.keys(value).length === 0) ||
//       (typeof value === "string" && value.trim().length === 0)
//     );
//   };

  export const editPostReducer = (posts, currentPost) => {
    posts.forEach((post)=>{
      if (post.id === currentPost.id){
        post.content = currentPost.content
      }
    })
    return posts;
  }

  export const deletePostReducer = (posts, currentPostId) => {
    return posts.filter((post) => post.id !== currentPostId)
  }

  export const addLikeReducer = (posts, currentPost) => {
    posts.forEach((post)=>{
      if (post.id === currentPost.id){
        post.likes = currentPost.likes
      }
    })
    return posts;
  }