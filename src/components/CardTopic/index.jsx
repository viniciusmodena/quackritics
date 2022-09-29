import {
  Container,
  ContainerDetails,
  ContainerImgName,
  ContainerFooter,
  ContainerTitleDescription,
} from "./styles";

const CardTopic = ({ topic }) => {
  return (
    <Container>
      <ContainerDetails>
        <ContainerImgName>
          <img src={topic.icon} alt="User Profile" />
          <span>{topic.userName}</span>
        </ContainerImgName>
        <ContainerTitleDescription>
          <h3>{topic.topicTitle}</h3>
          <span>Movie: {topic.movieTitle}</span>
          <p>{topic.topicDescription}</p>
        </ContainerTitleDescription>
      </ContainerDetails>
      <ContainerFooter>
        <span className="post-date">
          Posted by {topic.userName}, {topic.postDate}
        </span>
        {!!topic.spoilerAlert && (
          <span className="spoiler">Spoiler Alert!</span>
        )}
      </ContainerFooter>
    </Container>
  );
};

export default CardTopic;
