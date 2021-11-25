import "./MovieItem.css";

const MovieItem = (props) => {
	return (
		<div className="card">
			<div className="card-style">
				<p>{props.title}</p>
				<img alt={props.title} src={props.image} />
				<p>{props.year}</p>
			</div>
		</div>
	);
};
export default MovieItem;
