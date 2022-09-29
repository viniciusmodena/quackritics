import { useContext } from "react";
import { createContext, useState } from "react";
import { moviesAPI, apiKey } from "../../services/api";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const movieSearch = (search, page = 1) => {
        moviesAPI
            .get(`/movie/top_rated?${apiKey}`, {
                params: {
                    page: page
                }
            })
            .then((response) => {
                console.log(response.data)
                setMovies(response.data.results.slice(0, 20));
            })
            .catch((err) => console.log(err));
    };

    return (
        <MovieContext.Provider
            value={{ movieSearch, movies }}
        >
            {children}
        </MovieContext.Provider>
    );
};

export const useMovie = () => useContext(MovieContext);
