import React from "react";
import Contentwraper from "../../../components/contentwraper/Contentwraper.js";
import Carosal from "../../../components/carosal/Carosal.jsx";
import useFetch from "../../../hooks/useFetch.js";

const Smilar = ({ id, mediaType }) => {
	const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

	return (
		<>
			<Contentwraper>
				<div className="heading">Similar</div>
			</Contentwraper>
			<Carosal data={data} loading={loading} mediaType={mediaType} />
		</>
	);
};

export default Smilar;
