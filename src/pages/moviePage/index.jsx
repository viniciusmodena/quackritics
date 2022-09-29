import {
  MoviesContainer,
  MainContainer,
  MoviesContent,
  MoviesImg,
  MoviesDescription,
  MoviesReviews,
  BoxImg,
  UserContainer,
  UserReviewContent,
  UserReviewDescription,
  UserNewReview,
  BoxIcon,
  BoxUserInfo,
  BoxEditReview,
  BoxUserReviewDesc,
  BoxUserReviews,
  BoxNewReview,
  ReviewsContainer,
  ReviewsCards,
  ReviewBoxUser,
  ReviewBoxDescription,
  ReviewBoxButtons,
} from "./style";
import userIcon from "../../assets/UserDefaultIcon/user.png";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import { motion } from "framer-motion";
import { useDidUpdate } from "rooks";
import { useState, useEffect } from "react";
import { useTitles } from "../../Providers/titles";
import { useReviews } from "../../Providers/reviews";

const MoviePage = () => {
  const [load, setLoad] = useState(false)
  const [filmRating, setFilmRating] = useState(0);
  const [userReview, setUserReview] = useState();
  const [ratingValue, setRatingValue] = useState(0);
  // const [refresh, setRefresh] = useState(false);
  const [newReview, setNewReview] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("@quackritics:user")) || {};
  const { userName } = userInfo;
  const movie = JSON.parse(localStorage.getItem("@quackritick:title"))
  const { id, original_title, overview, release_date, poster_path } = movie;
  const { postMovieReview, getMovieReviews, reviews, deleteMovieReview,setTotalReviews, getTotalReviews, movieRating, getMovieRating } =
    useReviews();

  const handleReview = () => {
    const objReview = {
      movieId: id,
      userId: userInfo.id,
      username: userName,
      review: newReview,
      grade: ratingValue,
      userProfileImage: "default",
      postDate: new Date().toLocaleString(),
      movieTitle: original_title,
    };
    postMovieReview(objReview);
    // setRefresh(true);
  };

  const handleDelete = () => {
    deleteMovieReview(userReview.id);
    // setRefresh(true);
  };

  const handleRating = (newRating) => {
    setRatingValue(newRating);
    // setRefresh(true);
  };

  useEffect(() => {
    getMovieReviews(id) 
    // setRefresh(false)
  }, []);
  
  useEffect(() => {
    setLoad(false)
  },[])

  useEffect(()=>{
    getMovieRating(id)
  },[reviews])

  useDidUpdate(() => {
    const filteredReview =
      reviews.filter(({ userId }) => userId === userInfo.id)[0] || undefined;
    
    setUserReview(filteredReview);
  }, [reviews]);


  useDidUpdate(()=>{
    setLoad(false)
    getMovieRating(id)
    // setLoad(true)


  },[reviews])

  useDidUpdate(() => {
    setLoad(true)
  },[movieRating])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <MainContainer>
          <MoviesContainer>
            <h2>Movie Details</h2>
            <MoviesContent>
              <BoxImg>
                <MoviesImg>
                  <img
                    src={`http://image.tmdb.org/t/p/w500${poster_path}`}
                    alt=''
                  />
                </MoviesImg>
                <MoviesReviews>
                  {(load || movieRating) &&(
                    <Rating
                    edit={false}
                    // onChange={handleRating}
                    rating={movieRating}
                  />
                  )}
                  
                  {/* {!!totalReviews[0] && (
                    <Rating rating={totalReviews[0].rating} />
                  )} */}
                </MoviesReviews>
              </BoxImg>
              <MoviesDescription>
                <h3>{original_title}</h3>
                <span>
                  Launch date: <p>{release_date}</p>
                </span>
                <span>
                  Synopsis:
                  <p> {overview}</p>
                </span>
              </MoviesDescription>
            </MoviesContent>

            <UserContainer>
              <h2>Your Review</h2>
              <UserReviewContent>
                {userReview ? (
                  <UserReviewDescription>
                    <BoxIcon>
                      <BoxUserInfo>
                        <img src={userInfo.icon} alt='' />
                        <h3>{userName}</h3>
                      </BoxUserInfo>
                      <BoxEditReview>
                        <Button
                          colorSchema={'--negative'}
                          onClick={() => handleDelete()}
                        >
                          <FaTrashAlt />
                        </Button>
                      </BoxEditReview>
                    </BoxIcon>
                    <BoxUserReviewDesc>
                      {userReview && <p>{userReview.review}</p>}
                    </BoxUserReviewDesc>
                    {userReview === undefined ? (
                      <BoxUserReviews>
                        <Rating edit={true} onChange={handleRating}/>
                        {userReview && <span>{userReview.postDate}</span>}
                      </BoxUserReviews>
                    ) : (
                      <BoxUserReviews>
                        <Rating
                          edit={false}
                          rating={userReview.grade}
                        />
                        {userReview && <span>{userReview.postDate}</span>}
                      </BoxUserReviews>
                    )}
                  </UserReviewDescription>
                ) : (
                  <UserNewReview>
                    {userReview === undefined ? (
                      <>
                      <BoxUserReviews>
                        <Rating edit={true} handleRating={handleRating}/>
                        {userReview && <span>{userReview.postDate}</span>}
                      </BoxUserReviews>
                      <BoxNewReview>
                        <input
                          type='text'
                          placeholder='Make a review...'
                          onChange={(e) => setNewReview(e.target.value)}
                        />
                        <Button
                          colorSchema={'--primary-gradient'}
                          onClick={() => handleReview()}
                        >
                          Publish
                        </Button>
                      </BoxNewReview>
                      </>
                    ) : (
                      ''
                    )}
                  </UserNewReview>
                )}
              </UserReviewContent>
            </UserContainer>
          </MoviesContainer>
          <ReviewsContainer>
            {reviews
              .filter(({ userId }) => userId !== userInfo.id)
              .map((item, index) => (
                
                  <ReviewsCards key={item.id}>
                    <ReviewBoxUser>
                      <img src={userIcon} alt='' />
                      <h3>{item.username}</h3>
                      <Rating
                          edit={false}
                          rating={item.grade}
                        />
                    </ReviewBoxUser>
                    <ReviewBoxDescription>
                      <p>{item.review}</p>
                    </ReviewBoxDescription>
                    <ReviewBoxButtons>
                      <span>{item.postDate}</span>
                    </ReviewBoxButtons>
                  </ReviewsCards>
              
              ))}
          </ReviewsContainer>
        </MainContainer>
      </motion.div>
    </>
  )
};
export default MoviePage;
