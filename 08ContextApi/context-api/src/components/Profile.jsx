import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { userDetails } = useContext(UserContext);
  if (!userDetails) return <div>Please Login</div>;
  return <div>Welcome {userDetails.userName} and your password is {userDetails.pass}</div>
};

export default Profile;
