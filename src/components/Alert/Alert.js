import "./Alert.css";

const closeHandler = (event) => {
	event.target.parentElement.style.display = "none";
};

const Alert = (props) => {
	return props.nominatedList.length === 5 ? (
		<div className="alert">
			<span className="closebtn" onClick={closeHandler}>
				&times;
			</span>
			You have already Nominate 5 Movies!
		</div>
	) : null;
};
export default Alert;
