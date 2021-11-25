import React from "react";
import "./SearchInput.css";
const SearchForm = (props) => {
	const movieChangeHandler = (event) => {
		props.onSearchMovieHandler(event.target.value);
	};

	return (
		<div className="header">
			<div className="search">
				<input
					type="text"
					placeholder="Search here.... Write at least 3 letters, example: pam or opp"
					id="movieName"
					onChange={movieChangeHandler}
					className="search-input"
				/>
			</div>
		</div>
	);
};

export default SearchForm;
