//tools import
import { useContext, useEffect, useState, createContext } from "react";
import { toast } from "react-toastify";
//Api import
import { quackApi } from "../../services/api";
import duck from "../../assets/duck-user.svg";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(false);
  const [userEdited, setUserEdited] = useState({});

  useEffect(() => {
    setUserLogged(
      JSON.parse(localStorage.getItem("@quackritics:token")) ? true : false
    );
  }, []);

  const registerUser = (userInfo) => {
    const userInfoUpdated = {
      ...userInfo,
      icon: "https://media.istockphoto.com/vectors/duckling-simple-vector-icon-vector-id1045035708?k=20&m=1045035708&s=612x612&w=0&h=eUv26Njg6R9lGiDl4fLZccV2altzVDksirrftyrxYuo=",
      theme: "light",
      NumberReviews: 0,
    };
    quackApi
      .post("/register", userInfoUpdated)
      .then((response) => {
        localStorage.setItem(
          "@quackritics:token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@quackritics:user",
          JSON.stringify(response.data.user),
          setUserLogged(true)
        );

        toast.success("Registered with success!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        toast.error("Couldn't register!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
        setUserLogged(false);
      });
  };

  const loginUser = (loginInfo) => {
    quackApi
      .post("/login", loginInfo)
      .then((response) => {
        localStorage.setItem(
          "@quackritics:token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem(
          "@quackritics:user",
          JSON.stringify(response.data.user)
        );
        setUserLogged(true);
        toast.success("Login successful!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        toast.error("Couldn't login!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
        setUserLogged(false);
      });
  };

  const editPreferences = (preferences) => {
    const userId = JSON.parse(localStorage.getItem("@quackritics:user")).id;
    const userToken = JSON.parse(localStorage.getItem("@quackritics:token"));

    quackApi
      .patch(`/users/${userId}`, preferences, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        localStorage.setItem(
          "@quackritics:user",
          JSON.stringify(response.data)
        );
        setUserEdited(response.data);
        toast.success("Changes Saved!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        toast.error("Failed to save preferences!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        editPreferences,
        userLogged,
        setUserLogged,
        userEdited,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
