import { useContext } from 'react'
import { createContext, useState } from 'react'
import { moviesAPI, apiKey } from '../../services/api'
import { useHistory } from 'react-router-dom'


const TitlesContext = createContext();

export const TitlesProvider = ({ children }) => {

  const [titles, setTitles] = useState([])
  const [title, setTitle] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [totalPagesMovies, setTotalPagesMovies] = useState()
  const history = useHistory()

  const titleSearch = (page = 1) => {

    moviesAPI
      .get(`/search/movie?${apiKey}&query=${searchInput}&page=${page}`)
      .then((response) => {
        console.log(response.data)
        setTitles(response.data.results)
        setTotalPagesMovies(response.data.total_pages)
      })
      .catch((err) => console.log(err));

    // para carregar imagem: http://image.tmdb.org/t/p/w500 + poster_path
  }

  const getTitle = (movieId) => {
    moviesAPI
      .get(`/movie/${movieId}?${apiKey}`)
      .then((response) => {
        console.log(response.data)
        setTitles(response.data.results)
      })
      .catch((err) => console.log(err))
  }

  const carroselTitles = ( page = 1) => {
    moviesAPI
        .get(`/movie/top_rated?${apiKey}`, {
            params: {
                _page: page
            }
        })
        .then((response) => {
            console.log(response.data)
            setTitles(response.data.results);
        })
        .catch((err) => console.log(err));
};

  
  const handleClickTitle = (titleId) => {
    const selectedTitle = titles.filter(({id}) => id === titleId)[0]
    setTitle(selectedTitle)
    localStorage.setItem("@quackritick:title", JSON.stringify(selectedTitle))
    history.push('/movie')
  }

  return (
    <TitlesContext.Provider
      value={{ titleSearch, titles, totalPagesMovies, getTitle, carroselTitles, searchInput, setSearchInput, handleClickTitle, title}}
    >
      {children}
    </TitlesContext.Provider>
  );
};

export const useTitles = () => useContext(TitlesContext);
