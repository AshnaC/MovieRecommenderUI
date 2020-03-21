/**
 *
 * ExplorerLayout
 *
 */

import React, { useState, useCallback, useEffect } from "react";

import { Header, SubItem, StyledFont, Container, ErrorBoundary } from "./styles";

import MovieFinder from "../MovieFinder";
import MovieLister from "../MovieLister";
import MovieView from "../MovieView";

function ExplorerLayout(props) {
    const {
        searchMovies,
        searchList,
        getSimilarMovies,
        movieDetails,
        moviesList = [],
        error
    } = props;
    const moviesToList = moviesList.map(elt => movieDetails[elt.movieIndex] || elt);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const selectMovieData = selectedMovie ? movieDetails[selectedMovie.movieIndex] : undefined;

    const selectMovies = useCallback(movie => {
        const movieData = movieDetails[movie.movieIndex] || movie;
        setSelectedMovie(movieData);
    }, []);

    useEffect(() => {
        if (selectMovieData && selectedMovie && !selectedMovie.id) {
            selectMovies(selectedMovie);
        }
    }, [selectMovieData]);

    return (
        <div>
            <Header>
                <SubItem>
                    <StyledFont name="film" />
                    Movies
                </SubItem>
            </Header>
            <MovieFinder
                searchList={searchList}
                searchMovies={searchMovies}
                getSimilarMovies={getSimilarMovies}
                setSelectedMovie={selectMovies}
            />
            {selectedMovie && <MovieView movie={selectedMovie} />}
            {error ? (
                <ErrorBoundary>Something went wrong!</ErrorBoundary>
            ) : (
                <Container>
                    <MovieLister
                        movies={moviesToList}
                        getSimilarMovies={getSimilarMovies}
                        setSelectedMovie={selectMovies}
                    />
                </Container>
            )}
        </div>
    );
}

export default ExplorerLayout;
