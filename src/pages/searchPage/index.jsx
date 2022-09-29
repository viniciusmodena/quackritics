import { motion } from 'framer-motion'
import Header from '../../components/Header'
import { useTitles } from '../../Providers/titles'
import Pagination from '../../components/Pagination'
import { useEffect, useState, useRef } from 'react'
import { useReviews } from '../../Providers/reviews'
import Rating from '../../components/Rating'
import { useDidUpdate } from 'rooks'
import Skeleton from '@mui/material/Skeleton'
import noImage from "../../assets/image-not-available.png"

import {
  Container,
  ContainerImage,
  ContainerTopicDetails,
  ContainerSearch,
  MainContainer,
  ContainerRating,
  PaginationStyled
} from './styles'

export default function SearchPage() {
  const { titles, totalPagesMovies, titleSearch, handleClickTitle } =
    useTitles()
  
    const [updatedTitles, setUpdateTitles] = useState([])
  
  const {
    getMoviesReviews,
    getTotalReviews,
    totalReviews,
    setTotalReviews,
    load,
    setLoad,
  } = useReviews()

  const scrollStartsHere = useRef(null)

  const scrollToTop = () => {
    scrollStartsHere.current.scrollTo({top: 0, behavior: 'smooth'})
  }

   useEffect(() => {
    setTotalReviews([])
    setLoad(false)
    scrollToTop()
  }, [titles])

  useDidUpdate(() => {
    const standard = titles.length
    const position = totalReviews.length

    if (standard !== position) {
      getTotalReviews(titles[position].id)
    } else if (position !== 0 && position === standard) {
      setLoad(true)
    }
  }, [totalReviews])

  const handleClickPage = () => {
    setLoad(false)
  }

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <MainContainer>
            <h1>Search Results</h1>
            <ContainerSearch ref={scrollStartsHere}>
              <ul>
                {titles.length === totalReviews.length ? (
                  titles.map((title, index) => (
                    <li key={index} onClick={() => handleClickTitle(title.id)}>
                      <ContainerImage>
                        {!!title.poster_path ? (
                          <img
                            src={`http://image.tmdb.org/t/p/w500${title.poster_path}`}
                            alt='movie cover'
                          />
                        ) : (
                          <div
                            className='imgDiv'
                            style={{ backgroundImage: `url(${noImage})` }}
                          ></div>
                        )}
                      </ContainerImage>
                      <ContainerTopicDetails>
                        <h3>{title.original_title}</h3>
                        {!!title.release_date && (
                          <p>{new Date(title.release_date).getFullYear()}</p>
                        )}
                      </ContainerTopicDetails>

                      <ContainerRating>
                        {!!totalReviews[index].rating && (
                          <Rating rating={totalReviews[index].rating} />
                        )}
                        <span className='countContainer'>
                          ({totalReviews[index].numberOfReviews})
                        </span>
                      </ContainerRating>
                    </li>
                  ))
                ) : (
                  <>
                    {!!titles.length > 0 &&
                      titles.map((_, index) => (
                        <li key={index}>
                          {' '}
                          <ContainerImage>
                            <Skeleton
                              animation='wave'
                              variant='rect'
                              width={80}
                              height={120}
                            />
                          </ContainerImage>
                          <ContainerTopicDetails>
                            <h3>
                              {' '}
                              <Skeleton
                                animation='wave'
                                variant='rect'
                                width={390}
                                height={16}
                              />
                            </h3>
                            <p>
                              {' '}
                              <Skeleton
                                animation='wave'
                                variant='rect'
                                width={390}
                                height={18}
                              />
                            </p>
                          </ContainerTopicDetails>
                          <ContainerRating>
                            <Skeleton
                              animation='wave'
                              variant='rect'
                              width={130}
                              height={20}
                            />
                          </ContainerRating>
                        </li>
                      ))}
                  </>
                )}
              </ul>
            </ContainerSearch>
            <PaginationStyled>
              {!!totalPagesMovies && (
                <Pagination
                  totalPages={totalPagesMovies}
                  request={titleSearch}
                  onClick={handleClickPage}
                />
              )}
            </PaginationStyled>
          </MainContainer>
        </Container>
      </motion.div>
    </>
  )
}
