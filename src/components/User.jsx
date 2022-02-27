import React from "react";
import { useSelector } from "react-redux";

const User = () => {

  const {user, isUserLoading} = useSelector((state)=>state.userReducer);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{user[0].pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>Age : 35 ans</p>
        <p>Like{user[0].likes>1? "s":null}: {user[0].likes}</p>
      </div>
    </div>
  );
};

export default User;