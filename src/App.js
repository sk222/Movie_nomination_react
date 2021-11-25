import { Route, Routes } from "react-router-dom";
import Movie from "../src/pages/Movies";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Movie />} />
			</Routes>
		</div>
	);
}

export default App;
