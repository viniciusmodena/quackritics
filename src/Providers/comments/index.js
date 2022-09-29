import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { quackApi } from "../../services/api";

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("@quackritics:token"));
  const [comments, setComments] = useState([]);
  const [loadSkeleton, setLoadSkeleton] = useState(false);
  const [totalPagesComments, setTotalPagesComments] = useState();
  const [commentEdited, setCommentEdited] = useState(false);

  const getComments = (topicId, page = 1) => {
    quackApi
      .get("/comments", {
        params: {
          _sort: "id",
          _page: page,
          _limit: 10,
          _order: "desc",
          topic: topicId,
        },
      })
      .then((response) => {
        setComments(response.data);
        setTotalPagesComments(
          Math.ceil(Number(response.headers["x-total-count"]) / 10)
        );
      })
      .catch((err) => console.log(err));
  };

  const postComment = (newComment) => {
    quackApi
      .post(`/comments`, newComment, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setComments([response.data, ...comments]);
        toast.success("Comment post successfully!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) =>
        toast.error("Couldn't post comment!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const deleteComment = (commentId) => {
    quackApi
      .delete(`/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setComments(comments.filter((comment) => comment.id !== commentId));
        toast.success("Comment deleted successfully!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) =>
        toast.error("Couldn't delete comment!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const patchComment = (commentId, editedComment) => {
    quackApi
      .patch(`/comments/${commentId}`, editedComment, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setCommentEdited(true);
        toast.success("Comment updated successfully!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      })
      .catch((err) =>
        toast.error("Couldn't update comment!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  return (
    <CommentsContext.Provider
      value={{
        getComments,
        postComment,
        deleteComment,
        patchComment,
        setComments,
        setLoadSkeleton,
        comments,
        totalPagesComments,
        loadSkeleton,
        commentEdited,
        setCommentEdited,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);
