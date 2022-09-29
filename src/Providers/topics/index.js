import { useContext } from "react";
import { createContext, useState } from "react";
import { quackApi } from "../../services/api";
import { toast } from "react-toastify";

const TopicsContext = createContext();

export const TopicsProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("@quackritics:token"));
  const [topics, setTopics] = useState([]);
  const [totalPagesTopics, setTotalPagesTopics] = useState("");

  const getTopics = (page = 1) => {
    quackApi
      .get("/topics", {
        params: {
          _sort: "id",
          _page: page,
          _limit: 10,
          _order: "desc",
        },
      })
      .then((response) => {
        setTopics(response.data);
        setTotalPagesTopics(
          Math.ceil(Number(response.headers["x-total-count"]) / 10)
        );
      })
      .catch((err) =>
        toast.error("Couldn't load topics!'", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const getAllTopics = () => {
    quackApi
      .get("/topics")
      .then((response) => {
        setTopics(response.data);
      })
      .catch((err) => console.log(err));
  };

  const postTopic = (newTopic) => {
    quackApi
      .post(`/topics`, newTopic, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setTopics([response.data, ...topics]);
        toast.success("Topic created successfully!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) =>
        toast.error("Couldn't create topic!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const deleteTopic = (topicId) => {
    quackApi.delete(`/topics/${topicId}`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
    toast.error("Topic deleted!", {
      theme: "dark",
      autoClose: 1500,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <TopicsContext.Provider
      value={{
        getTopics,
        postTopic,
        deleteTopic,
        getAllTopics,
        topics,
        totalPagesTopics,
      }}
    >
      {children}
    </TopicsContext.Provider>
  );
};

export const useTopics = () => useContext(TopicsContext);
