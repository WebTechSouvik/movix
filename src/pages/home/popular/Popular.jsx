import react, { useState } from "react";
import useFetch from "../../../hooks/useFetch.js";
import Swtchingtabs from "../../../components/swtchinhtabs/Swtchingtabs.jsx";
import Carosal from "../../../components/carosal/Carosal.jsx";
import CaroslaSkeleton from "../../../components/caroslaCardSkeleton/CaroslaSkeleton.jsx"

const Popular = () => {
	const [end, setend] = useState("movie");
	const { data, loading } = useFetch(`/${end}/popular`);
	const tabChange = (type) => {
		setend(type);
		console.log(data);
	};

	return (
		<>
			<Swtchingtabs
				buttonType={["movie", "tv"]}
				heading={"Whats popular"}
				tabChange={tabChange}
			/>
			<Carosal data={data} loading={loading} end={end} />
	{/*	{[1,2,3].map(()=><CaroslaSkeleton/>)}*/}
		</>
	);
};

export default Popular;
