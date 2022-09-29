import {
  CheckboxContainer,
  Container,
  DescriptionContainer,
  HeaderContainer,
  IconsContainer,
  Image,
  MainContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTopics } from "../../Providers/topics";
import Input from "../Input";
import Button from "../Button";
import { MdCloseFullscreen } from "react-icons/md";
import { useState } from "react";
import duck from "../../assets/duck-user.svg";
import { motion } from "framer-motion";
import { useUser } from "../../Providers/user";
import userEvent from "@testing-library/user-event";

const Modal = ({ handleModal, type }) => {
  const { postTopic } = useTopics();

  const user = JSON.parse(localStorage.getItem("@quackritics:user")) || {};

  const registerTopicSchema = yup.object().shape({
    movieTitle: yup
      .string()
      .required("* Required field!")
      .trim()
      .matches(`(?=.*[a-z]) || (?=.*[A-Z])`, "*Don't use only spaces!"),
    topicTitle: yup
      .string()
      .required("* Required field!")
      .trim("Don't use only white spaces")
      .matches(`(?=.*[a-z]) || (?=.*[A-Z])`, "*Don't use only spaces!"),
    spoilerAlert: yup.bool(),
    topicDescription: yup
      .string()
      .required("*Required field")
      .min(10, "*Minimun 10 letters!")
      .trim("Don't use only white spaces")
      .matches(`(?=.*[a-z]) || (?=.*[A-Z])`, "*Write a description!"),
  });

  const handleRegisterTopic = (data) => {
    const topic = {
      ...data,
      userName: user.userName,
      icon: user.icon,
      userId: user.id,
      postDate: new Date().toLocaleString(),
    };
    postTopic(topic);
    handleModal();
  };

  const [newIcon, setNewIcon] = useState("");
  const { editPreferences } = useUser();
  const handleNewIcon = (newIcon) => {
    setNewIcon(newIcon);
  };

  const handleNewProfile = () => {
    const newUserData = {
      favGenres: user.fanGenres,
      userName: user.userName,
      NumberReviews: user.NumberReviews,
      email: user.email,
      icon: `${newIcon ? newIcon : user.icon}`,
      theme: user.theme,
      id: user.id,
    };

    editPreferences(newUserData);

    handleModal();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerTopicSchema),
  });

  switch (type.toLowerCase()) {
    case "topics":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Container>
            <MainContainer onSubmit={handleSubmit(handleRegisterTopic)}>
              <HeaderContainer>
                <h3>Create Topic</h3>
                <button onClick={() => handleModal()}>
                  <MdCloseFullscreen />
                </button>
              </HeaderContainer>
              <Input
                type="text"
                description="Topic Title"
                placeholder="Type the topic title here"
                register={register}
                name="topicTitle"
                error={errors.topicTitle?.message}
              />
              <Input
                type="text"
                description="Movie Title"
                placeholder="Type the movie title here"
                register={register}
                name="movieTitle"
                error={errors.movieTitle?.message}
              />
              <DescriptionContainer>
                <p>Topic Description</p>
                <span>{errors && errors.topicDescription?.message}</span>
                <textarea
                  name="topicDescription"
                  rows="4"
                  cols="auto"
                  placeholder="Type your description here..."
                  {...register("topicDescription")}
                ></textarea>
              </DescriptionContainer>
              <CheckboxContainer>
                {!!!errors && <span>{errors.spoilerAlert?.message}</span>}
                <input type="checkbox" {...register("spoilerAlert")} />
                <label name="spoilerAlert" htmlFor="spoilerAlert">
                  This topic has spoilers?
                </label>
              </CheckboxContainer>
              <Button colorSchema="--primary-gradient" type="submit">
                Post Topic
              </Button>
            </MainContainer>
          </Container>
        </motion.div>
      );

    case "edit profile":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Container>
            <MainContainer onSubmit={handleNewProfile}>
              <HeaderContainer>
                <h3>Edit profile Image</h3>
                <button onClick={() => handleModal()}>
                  <MdCloseFullscreen />
                </button>
              </HeaderContainer>
              <IconsContainer>
                <a href="#">
                  <Image
                    src="https://media.istockphoto.com/vectors/duckling-simple-vector-icon-vector-id1045035708?k=20&m=1045035708&s=612x612&w=0&h=eUv26Njg6R9lGiDl4fLZccV2altzVDksirrftyrxYuo="
                    onClick={() => {
                      handleNewIcon(
                        "https://media.istockphoto.com/vectors/duckling-simple-vector-icon-vector-id1045035708?k=20&m=1045035708&s=612x612&w=0&h=eUv26Njg6R9lGiDl4fLZccV2altzVDksirrftyrxYuo="
                      );
                    }}
                    alt=""
                  />
                </a>
                <a href="#">
                  <Image
                    src="https://pyxis.nymag.com/v1/imgs/4a9/af5/e736d91cd589d1fe2545d1bb1d00b7ba95-08-psyduck.rsquare.w700.jpg"
                    onClick={() => {
                      handleNewIcon(
                        "https://pyxis.nymag.com/v1/imgs/4a9/af5/e736d91cd589d1fe2545d1bb1d00b7ba95-08-psyduck.rsquare.w700.jpg"
                      );
                    }}
                    alt=""
                  />
                </a>
                <a href="#">
                  <Image
                    src="https://selectedinspiration.com/storage/entries/2020/05/6074620200510121058773/Donald-Duck-Found-A-Treasure-Gal-Yosef-1.jpg"
                    onClick={() => {
                      handleNewIcon(
                        "https://selectedinspiration.com/storage/entries/2020/05/6074620200510121058773/Donald-Duck-Found-A-Treasure-Gal-Yosef-1.jpg"
                      );
                    }}
                    alt=""
                  />
                </a>
                <a href="#">
                  <Image
                    src="https://selectedinspiration.com/storage/entries/2020/08/39257020200823105021277/Daffy-Stole-My-Look-Gal-Yosef-2.jpg"
                    onClick={() => {
                      handleNewIcon(
                        "https://selectedinspiration.com/storage/entries/2020/08/39257020200823105021277/Daffy-Stole-My-Look-Gal-Yosef-2.jpg"
                      );
                    }}
                    alt=""
                  />
                </a>
                <a href="#">
                  <Image
                    src="https://i.pinimg.com/originals/b4/ab/38/b4ab3883a73df0c48509fbd76a2ed5d7.png"
                    onClick={() => {
                      handleNewIcon(
                        "https://i.pinimg.com/originals/b4/ab/38/b4ab3883a73df0c48509fbd76a2ed5d7.png"
                      );
                    }}
                    alt=""
                  />
                </a>
                <a href="#">
                  <Image
                    src="https://i.pinimg.com/originals/fb/72/6e/fb726efc7223dac4a9c9d95089b9d1f1.jpg"
                    onClick={() => {
                      handleNewIcon(
                        "https://i.pinimg.com/originals/fb/72/6e/fb726efc7223dac4a9c9d95089b9d1f1.jpg"
                      );
                    }}
                    alt=""
                  />
                </a>
              </IconsContainer>
              <Button colorSchema="--primary-gradient" type="submit">
                Save
              </Button>
            </MainContainer>
          </Container>
        </motion.div>
      );

    default:
      return null;
  }
};

export default Modal;
