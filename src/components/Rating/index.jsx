import ReactStars from "react-rating-stars-component";

export default function Rating({ rating, edit=false, handleRating}) {
  return (
    <ReactStars
      count={5}
      size={20}
      activeColor="#ffd700"
      onChange={handleRating}
      value={rating}
      edit={edit}
      isHalf={true}
    />
  );
}
