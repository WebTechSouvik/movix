import React from "react";
import Contentwraper from "../../../components/contentwraper/Contentwraper.js";
import Carosal from "../../../components/carosal/Carosal.jsx";
import useFetch from "../../../hooks/useFetch.js";

const Recomendation = ({ id, mediaType }) => {
	const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
	return (
		<>
			<Contentwraper>
				<div className="heading">Recomendation</div>
			</Contentwraper>
			<Carosal data={data} loading={loading} />
		</>
	);
};

export default Recomendation;
