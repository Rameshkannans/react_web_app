import { useState, useEffect } from "react";
import api from "../../api";

const useUserData = () => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    getUser();
    getUserDetails();
  }, []);

  const getUser = () => {
    api
      .get("/api/user/info/")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Failed to fetch user info", err));
  };

  const getUserDetails = () => {
    api
      .get("/api/profile/")
      .then((res) => setUserDetails(res.data))
      .catch((err) => console.error("Failed to fetch user details info", err));
  };

  return { user, userDetails };
};

export default useUserData;
