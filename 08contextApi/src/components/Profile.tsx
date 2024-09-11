import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return <div>Profile: {user ? user.username : "Not logged in"}</div>;
}

export default Profile;
