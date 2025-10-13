import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favorites, setFavorites] = useState([])
      const [mustWatch, setMustWatch] = useState([])
    const [myReviews, setMyReviews] = useState({})


    const addToFavorites = (movie) => {
        let newFavorites = [];
        if (!favorites.includes(movie.id)) {
            newFavorites = [...favorites, movie.id];
        }
        else {
            newFavorites = [...favorites];
        }
        setFavorites(newFavorites)
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };
    console.log(myReviews);

    const removeFromFavorites = (movie) => {
        setFavorites(favorites.filter(
            (mId) => mId !== movie.id
        ))
    };

     const addToMustWatch = (movieId) => {
        setMustWatch((prev) => {
            if (!prev.includes(movieId)) {  
                const updated = [...prev, movieId];
                console.log("Must Watch Movies:", updated);
                return updated;
            }
            return prev;
        });
    };

    return (
        <MoviesContext.Provider
            value={{
                favorites,
                addToFavorites,
                removeFromFavorites,
                addReview,
                mustWatch,   
                addToMustWatch, 
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );

};

export default MoviesContextProvider;
