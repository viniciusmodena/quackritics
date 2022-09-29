import { useContext } from "react";
import { createContext } from "react";
import { quackApi } from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const userToken = JSON.parse(localStorage.getItem("@quackritics:token"));

  const [userTotalReviews, setUserTotalReviews] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [movieRating, setMovieRating] = useState("")
  const [totalReviews, setTotalReviews] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [totalPagesReviews, setTotalPagesReviews] = useState();
  const [load, setLoad] = useState(false);

  const getMovieReviews = (movieId, page = 1) => {
    quackApi
      .get(`/reviews?movieId=${movieId}`, {
        params: {
          _sort: "id",
          _page: page,
          _limit: 10,
          _order: "desc",
        },
      })
      .then((response) => {
        setReviews(response.data);
        setTotalPagesReviews(
          Math.ceil(Number(response.headers["x-total-count"]) / 10)
        );
      })
      .catch((err) => console.log(err));
  };

  const getTotalReviews = (movieId) => {
    quackApi
      .get(`/reviews?movieId=${movieId}`)
      .then((response) => {
        const numberOfReviews = response.data.length;

        const rating =
          response.data.reduce((total, { grade }) => total + grade, 0) /
          numberOfReviews;

        const reviewInfo = {
          movieId: movieId,
          numberOfReviews: numberOfReviews,
          rating: rating,
        }
        setTotalReviews([...totalReviews, reviewInfo])
       })
       .catch((err) => console.log(err))
   }

   const getMovieRating = (movieId) => {
     quackApi
       .get(`/reviews?movieId=${movieId}`)
       .then((response) => {
         const numberOfReviews = response.data.length

         const rating =
           response.data.reduce((total, { grade }) => total + grade, 0) /
           numberOfReviews
          if(numberOfReviews === 0){
            setMovieRating(0)
          }else{
            setMovieRating(rating)
          }
       })
       .catch((err) => console.log(err))
   }

    const getUserReviews = (userId, page = 1) => {
      quackApi
        .get(`/reviews?userId=${userId}`, {
          params: {
            _sort: 'id',
            _page: page,
            _limit: 10,
            _order: 'desc',
          },
        })
        .then((response) => {
          setUserReviews(response.data)
          setTotalPagesReviews(
            Math.ceil(Number(response.headers['x-total-count']) / 10)
          )
        })
        .catch((err) => console.log(err))
    };

    const getTotalUserReviews = (userId) => {
      quackApi
        .get(`/reviews?userId=${userId}`)
        .then((response) => {
          setUserTotalReviews(response.data)
          
        })
        .catch((err) => console.log(err))
    }

  const postMovieReview = (newReview) => {
    quackApi
      .post(`reviews`, newReview, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) =>{
      setReviews([response.data, ...reviews])
        toast.success("Review posted successfully!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      })
      .catch((err) =>
        toast.error("Couldn't post review!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  const deleteMovieReview = (reviewId) => {
    quackApi
      .delete(`/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) =>{
        setReviews(reviews.filter((review) => review.id !== reviewId));
        toast.success("Review deleted successfully!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })}
      )
      .catch((err) =>
        toast.error("Couldn't  delete review!", {
          theme: "dark",
          autoClose: 1500,
          position: toast.POSITION.TOP_CENTER,
        })
      );
  };

  // const patchReview = (reviewId, editedReview) => {
  //   quackApi
  //     .patch(`/reviews/${reviewId}`, editedReview, {
  //       headers: { Authorization: `Bearer ${userToken}` },
  //     })
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // };

  return (
    <ReviewsContext.Provider
      value={{
        getMovieReviews,
        postMovieReview,
        deleteMovieReview,
        // patchReview,
        getUserReviews,
        getTotalReviews,
        userReviews,
        reviews,
        totalPagesReviews,
        totalReviews,
        setTotalReviews,
        load,
        setLoad,
        setUserTotalReviews,
        userTotalReviews,
        getTotalUserReviews,
        setMovieRating,
        movieRating,
        getMovieRating
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviews = () => useContext(ReviewsContext);
