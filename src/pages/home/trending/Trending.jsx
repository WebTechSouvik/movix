import react, { useState } from "react";
import useFetch from "../../../hooks/useFetch.js";
import Swtchingtabs from "../../../components/swtchinhtabs/Swtchingtabs.jsx";
import Carosal from "../../../components/carosal/Carosal.jsx";

const Trending = () => {
	const [end, setend] = useState("day");
	const { data, loading } = useFetch(`/trending/movie/${end}`);
	const tabChange = (type) => {
		setend(type);
		console.log(data);
	};

	return (
		<>
			<Swtchingtabs
				buttonType={["day", "week"]}
				heading={"Trending"}
				tabChange={tabChange}
			/>
			<Carosal data={data} loading={loading} />
		</>
	);
};

export default Trending;
