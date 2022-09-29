import Button from '../../components/Button'
import Header from '../../components/Header'
import { useTopics } from '../../Providers/topics'
import { useEffect, useRef } from 'react'
import Pagination from '../../components/Pagination'
import { useHistory } from 'react-router-dom'
import { useModalController } from '../../Providers/modalController'
import Modal from '../../components/Modal'
import { useUser } from '../../Providers/user'
import { motion } from 'framer-motion'

import {
  Container,
  ContainerImage,
  ContainerTitleButton,
  ContainerTopicDetails,
  ContainerTopics,
  MainContainer,
  ContainerSpoiler,
  PaginationStyled,
} from './styles'
import { useComments } from '../../Providers/comments'
import { useDidUpdate } from 'rooks'

const ForumPage = () => {
  const { getTopics, totalPagesTopics, topics} = useTopics()
  const { setLoadSkeleton } = useComments()
  const { handleModal, closeModal } = useModalController()
  const history = useHistory()
  const { userLogged, setUserLogged } = useUser();
  const token = JSON.parse(localStorage.getItem("@quackritics:token"));

  const scrollStartsHere = useRef(null)

  const scrollToTop = () => {
    scrollStartsHere.current.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    getTopics()
  }, [])
  
  useDidUpdate(() => {
    scrollToTop()
  }, [topics])

  useEffect(() => {
    if (!!token) setUserLogged(true);
  }, []);

  const handleClick = (topicId) => {
    setLoadSkeleton(true)
    localStorage.setItem("@quackritics:topicId", JSON.stringify(topicId));
    history.push("/topic");
  };

  return (
    <>
      {closeModal && <Modal handleModal={handleModal} type='topics'></Modal>}
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <MainContainer>
            <ContainerTitleButton>
              <h1>TOPICS</h1>
              <Button
                colorSchema='--primary-gradient'
                onClick={() => {
                  userLogged ? handleModal() : history.push('/login')
                }}
              >
                Create topic
              </Button>
            </ContainerTitleButton>

            <ContainerTopics ref={scrollStartsHere}>
              <ul>
                {!!topics.length > 0 &&
                  topics.map((topic, index) => (
                    <li key={index} onClick={() => handleClick(topic.id)}>
                      <ContainerImage>
                        <img src={topic.icon} alt='user' />
                      </ContainerImage>
                      <ContainerTopicDetails>
                        <h3>{topic.topicTitle}</h3>
                        <p>{topic.movieTitle}</p>
                      </ContainerTopicDetails>
                      <span>
                        Posted by {topic.userName}, {topic.postDate}
                      </span>
                      <ContainerSpoiler>
                        {!!topic.spoilerAlert && (
                          <span className='spoiler'>Spoiler Alert!</span>
                        )}
                      </ContainerSpoiler>
                    </li>
                  ))}
              </ul>
            </ContainerTopics>

            <PaginationStyled>
              {!!totalPagesTopics && (
                <Pagination totalPages={totalPagesTopics} request={getTopics} />
              )}
            </PaginationStyled>
          </MainContainer>
        </Container>
      </motion.div>
    </>
  )
}
export default ForumPage
