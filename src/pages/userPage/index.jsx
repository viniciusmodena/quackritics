//tools import
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { TiEdit } from "react-icons/ti";
import { toast } from "react-toastify";

//components import
import Rating from "../../components/Rating";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import {
  PageContainer,
  UserImage,
  MainContainer,
  UserDescription,
  ImageButtonContainer,
  ReviewContainer,
  ReviewTitle,
  UserReview,
  CenterBox,
  PaginationStyled,
} from "./style";
//styles import
import { UserContainer } from "./style";
import { ContainerImage, ContainerTopicDetails } from "../forumPage/styles";
import { useModalController } from "../../Providers/modalController";
import Modal from "../../components/Modal";

//providers import
import { useReviews } from "../../Providers/reviews";
import { useUser } from "../../Providers/user";
import { useDidUpdate } from "rooks";

const UserPage = () => {
  const user = JSON.parse(localStorage.getItem("@quackritics:user")) || {};
  const navigate = useHistory();
  const { id, userName, icon, favGenres } = user;
  const {
    getUserReviews,
    userReviews,
    getTotalUserReviews,
    userTotalReviews,
    totalPagesReviews,
  } = useReviews();

  const { closeModal, handleModal } = useModalController();
  const { setUserLogged, userEdited } = useUser();
  const scrollStartsHere = useRef(null);

  const scrollToTop = () => {
    scrollStartsHere.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    getUserReviews(id);
    getTotalUserReviews(id);
  }, []);

  useDidUpdate(() => {
    getUserReviews(id);
  }, [userEdited]);

  useDidUpdate(() => {
    scrollToTop();
  }, [userReviews]);

  useDidUpdate(() => {
  }, [userTotalReviews]);

  const handleLogout = () => {
    localStorage.clear();
    navigate.push("/");
    setUserLogged(false);
    toast.warning("You have been logged out", {
      theme: "dark",
      autoClose: 1500,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleClick = (movieId) => {
    localStorage.setItem("@quackritics:movieId", JSON.stringify(movieId));
    navigate.push("/movie");
  };

  return (
    <>
      {closeModal && (
        <Modal handleModal={handleModal} type="edit profile"></Modal>
      )}
      <Header />
      <PageContainer>
        <MainContainer>
          <CenterBox>
            <UserContainer>
              <ImageButtonContainer>
                <UserImage src={icon} alt="user" />
                <Button colorSchema="--primary-gradient" onClick={handleModal}>
                  Change picture <TiEdit />
                </Button>
              </ImageButtonContainer>
              <UserDescription>
                <h3>{userName}</h3>
                <p>
                  Total Reviews:{" "}
                  {userTotalReviews && <span>{userTotalReviews.length}</span>}
                </p>
              </UserDescription>
            </UserContainer>
            <ReviewContainer>
              <ReviewTitle>
                <h3>Reviews:</h3>
                <PaginationStyled show={false}>
                  {!!totalPagesReviews && (
                    <Pagination
                      totalPages={totalPagesReviews}
                      request={getUserReviews}
                      id={id}
                    />
                  )}
                </PaginationStyled>
                <Button colorSchema="--negative" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </ReviewTitle>
              <UserReview ref={scrollStartsHere}>
                {!!userReviews &&
                  userReviews.map((review, index) => {
                    return (
                      <li key={index} onClick={() => handleClick()}>
                        <ContainerImage className="containerImage">
                          <img src={icon} alt="user" />
                          <Rating
                          edit={false}
                          rating={review.grade}
                        />
                        </ContainerImage>
                        <ContainerTopicDetails>
                          {!!review.movieTitle && 
                          <h3 className="movieTitle">Movie: {review.movieTitle}</h3>}
                          <p>{review.review}</p>
                        </ContainerTopicDetails>
                        {review.postDate && <span>{review.postDate}</span>}
                      </li>
                    );
                  })}
              </UserReview>
              <PaginationStyled show={true}>
                {!!totalPagesReviews && (
                  <Pagination
                    totalPages={totalPagesReviews}
                    request={getUserReviews}
                    id={id}
                  />
                )}
              </PaginationStyled>
            </ReviewContainer>
          </CenterBox>
        </MainContainer>
      </PageContainer>
    </>
  );
};

export default UserPage;
