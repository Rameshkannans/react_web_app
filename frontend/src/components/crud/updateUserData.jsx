import { useState } from "react";
import api from "../../api";

const updateUserData = () => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const updateUser = (formData) => {
    api
      .put("/api/user/info/", formData)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Failed to update user info", err));
  };

  const updateUserDetails = (formData) => {
    api
      .put("/api/profile/", formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((res) => setUserDetails(res.data))
      .catch((err) => console.error("Failed to update user details info", err));
  };

  return { user, userDetails, updateUser, updateUserDetails };
};

export default updateUserData;



