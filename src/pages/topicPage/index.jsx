import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CardTopic from "../../components/CardTopic";
import Header from "../../components/Header";
import { useTopics } from "../../Providers/topics";
import { useComments } from "../../Providers/comments";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import Skeleton from "@mui/material/Skeleton";
import { useDidUpdate } from "rooks";
import EditButtonComponent from "../../components/EditButton";
import DeleteButton from "../../components/DeleteButton";

import {
  BoxNewComment,
  Container,
  MainContainer,
  ContainerComments,
  ContainerUserDetail,
  ContainerCommentDetail,
  ContainerNoComments,
  ContainerDate,
  ContainerCommentsTitle,
  ContainerButtons,
} from "./style";

const TopicPage = () => {
  const user = JSON.parse(localStorage.getItem("@quackritics:user"));

  const { getAllTopics, topics } = useTopics();
  const {
    getComments,
    postComment,
    patchComment,
    deleteComment,
    comments,
    setComments,
    totalPagesComments,
    setLoadSkeleton,
    loadSkeleton,
    commentEdited,
    setCommentEdited,
  } = useComments();

  const topicId = JSON.parse(localStorage.getItem("@quackritics:topicId"));

  const [topic, setTopic] = useState();
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setTopic(false);
    setComments([]);
    getAllTopics();
  }, []);

  useEffect(() => {
    setTopic(topics.find((element) => element.id === topicId));
  }, [topics]);

  useEffect(() => {
    getComments(topicId);
  }, [topic]);

  useDidUpdate(() => {
    setLoadSkeleton(false);
  }, [comments]);

  useDidUpdate(() => {
    getComments(topicId);
  }, [commentEdited]);

  const handlePost = () => {
    const postObject = {
      userName: user.userName,
      icon: user.icon,
      userId: user.id,
      topic: topicId,
      comment: newComment,
      postDate: new Date().toLocaleString(),
    };
    postComment(postObject);
    setNewComment("");
  };

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Container>
          <MainContainer>
            {!!topic && <CardTopic topic={topic} />}
            <BoxNewComment>
              <textarea
                type="text"
                placeholder="Write your comment here"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button colorSchema={"--primary-gradient"} onClick={handlePost}>
                Publish
              </Button>
            </BoxNewComment>
            <ContainerCommentsTitle>
              <h1>Comments</h1>
            </ContainerCommentsTitle>

            <ContainerComments>
              {!loadSkeleton ? (
                <ul>
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <li key={comment.id}>
                        <ContainerUserDetail>
                          <img src={comment.icon} alt="User Profile" />
                          <span>{comment.userName}</span>
                        </ContainerUserDetail>
                        <ContainerCommentDetail>
                          <p>{comment.comment}</p>
                        </ContainerCommentDetail>
                        {user.id === comment.userId && (
                          <ContainerButtons>
                            <EditButtonComponent
                              request={patchComment}
                              comment={comment}
                            />
                            <DeleteButton
                              request={deleteComment}
                              id={comment.id}
                              topicId={comment.topic}
                            />
                          </ContainerButtons>
                        )}
                        <ContainerDate>
                          Posted by {comment.userName}, {comment.postDate}
                        </ContainerDate>
                      </li>
                    ))
                  ) : (
                    <li>
                      <ContainerNoComments>
                        <span>Be the first to comment here...</span>
                      </ContainerNoComments>
                    </li>
                  )}
                </ul>
              ) : (
                <li>
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    width={200}
                    height={120}
                  />
                </li>
              )}
            </ContainerComments>

            {!!totalPagesComments && (
              <Pagination
                totalPages={totalPagesComments}
                request={getComments}
                id={topicId}
              />
            )}
          </MainContainer>
        </Container>
      </motion.div>
    </>
  );
};

export default TopicPage;
