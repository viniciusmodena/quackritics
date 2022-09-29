//tools import
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FilmList,
  TopicList,
  PageContainer,
  PageUl,
  ContainerImage,
  ContainerTopicDetails,
  ContainerTopics,
  ContainerSpoiler,
  ContainerForum,
  ContainerCarousel,
  RatingContainer,
} from './style'
//components import
import Header from '../../components/Header'
import { useMovie } from '../../Providers/movie'
import CardImage from '../../components/CardImage'
import Footer from '../../components/Footer'
import Rating from '../../components/Rating'
import { useTopics } from '../../Providers/topics'
import { useComments } from '../../Providers/comments'
import { useTitles } from '../../Providers/titles'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
  const { movieSearch, movies } = useMovie()
  const { getTopics, topics } = useTopics()
  const { setLoadSkeleton } = useComments()
  const {handleClickTitle, carroselTitles, titles} = useTitles()
  const history = useHistory()
  useEffect(() => {
    carroselTitles()
    getTopics()
  }, [])

  const handleClick = (topicId) => {
    setLoadSkeleton(true)
    localStorage.setItem('@quackritics:topicId', JSON.stringify(topicId))
    history.push('/topic')
  }

  const calculateStars = (value) => {
    const converted = parseFloat(value) // Make sure we have a number
    const decimal = converted - parseInt(converted, 10)
    const newDecimal = Math.round(decimal * 10)
    if (newDecimal === 5) {
      return parseInt(converted, 10) + 0.5
    }
    if (newDecimal < 3 || decimal > 7) {
      return Math.round(converted)
    } else {
      return parseInt(converted, 10) + 0.5
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}  
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageContainer>
        <Header />
        <PageUl>
          <ContainerCarousel>
            <h1>Spotlight</h1>
            <FilmList>
              {titles.map((movie) => (
                <li className='lista_filmes' key={movie.id} onClick={()=>handleClickTitle(movie.id)}>
                  <CardImage heigth='250px' img={movie.poster_path} />
                  <RatingContainer>
                    <Rating rating={calculateStars(movie.vote_average / 2)} />
                  </RatingContainer>
                </li>
              ))}
            </FilmList>
          </ContainerCarousel>

          <ContainerForum>
            <h1>Forum</h1>
            <ContainerTopics>
              <TopicList>
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
              </TopicList>
            </ContainerTopics>
          </ContainerForum>
        </PageUl>
        <Footer />
      </PageContainer>
    </motion.div>
  )
}

export default HomePage
