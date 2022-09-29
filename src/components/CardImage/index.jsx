import { Image } from "./styles";

const CardImage = ({ width, heigth, mWidth, mHeigth, img }) => {
  return (
    <Image
      src={"https://image.tmdb.org/t/p/original" + img}
      alt=""
      width={width}
      heigth={heigth}
      mWidth={mWidth}
      mHeigth={mHeigth}
    />
  );
};

export default CardImage;
