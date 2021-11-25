import React, { useMemo, useState } from "react";
import MovieList from "./MovieList";
import SearchForm from "../components/SearchForm/SearchInput";
import NominationList from "../components/Nominations/NominationList";
import Alert from "../components/Alert/Alert";
import axios from "axios";
import debounce from "lodash.debounce";
import "./Movies.css";

const Movie = () => {
	const [movies, setMovies] = useState([]);
	const [nominatedList, setNomination] = useState([]);
	const [isNominated, setIsNominated] = useState([]);

	const searchMoviesHandler = (movieKeyword) => {
    if(movieKeyword.length>=3)
		{
      axios
			.get(
				`http://www.omdbapi.com/?apikey=f4a7a75d&type=movie&page=1&s=` +
					movieKeyword
			)
			.then((movies) => {
				if (movies.data.Response === "True") {
					const transformedMovies = movies.data.Search.map((moviesData) => {
						return {
							id: moviesData.imdbID,
							image: moviesData.Poster,
							title: moviesData.Title,
							year: moviesData.Year,
							isNominated: false,
						};
					});
					setMovies(transformedMovies);
				}
				if (movies.data.Response === "False") setMovies([]);
			})
			.catch((err) => {
				console.log(err);
			});
    }
	}; // http request;
	
  const debouceSearchMovieHandler = useMemo(
		() => debounce(searchMoviesHandler, 1000),
		[]
	);

	const nominationHandler = (event) => {
		if (nominatedList.length < 5) {
			const nominationObj = {
				id: event.target.getAttribute("id"),
				title: event.target.getAttribute("title"),
				year: event.target.getAttribute("year"),
				image: event.target.getAttribute("image"),
				isNominated: true,
			};

			setIsNominated((isNominated) => [
				...isNominated,
				event.target.getAttribute("id"),
			]);
			setNomination((nominatedList) => [...nominatedList, nominationObj]);
		}
	};

	const removeNominationHandler = (event) => {
		const arr = nominatedList.filter((nomination) => {
			return nomination.id !== event.target.id;
		});

		setIsNominated(
			isNominated.filter((nominated) => {
				return nominated !== event.target.id;
			})
		);

		setNomination(arr);
	};

	return (
		<React.Fragment> 
		<div>
			<Alert nominatedList={nominatedList} />
			<SearchForm onSearchMovieHandler={debouceSearchMovieHandler} />
			<div className="flex-container">
				<div className="container-one">
					<MovieList
						movies={movies}
						nominationHandler={nominationHandler}
						nominatedList={nominatedList}
						isNominated={isNominated}
					/>
				</div>
				<div className="container-two">
					<NominationList
						nominatedList={nominatedList}
						removeNominationHandler={removeNominationHandler}
					/>
				</div>
			</div>
		</div>
		</React.Fragment> 
	);
};

export default Movie;
