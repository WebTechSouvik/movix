import React, { useState, useEffect } from "react";
import Contentwraper from "../../components/contentwraper/Contentwraper";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import { getDataFromApi } from "../../api/Api.js";
import Moviecard from "../../components/moviecard/Moviecard.jsx";
import "./style.css";
import InfiniteScroll from "react-infinite-scroll-component";
import ExploreSkeleton from "../../components/exploreSkeleton/ExploreSkeleton.jsx";

const Searchresult = () => {
	const { query } = useParams();
	const [data, setData] = useState(null);
	const [loading, setloading] = useState(false);
	const [pagenum, setPagenum] = useState(1);

	const initialdata = async () => {
		setloading(true);
		const res = await getDataFromApi(
			`/search/multi?query=${query}&page=${pagenum}`,
		);
		setData(res);
		setloading(false);
		setPagenum(pagenum + 1);
		console.log(res);
	};

	const nextdata = async () => {
		const res = await getDataFromApi(
			`/search/multi?query=${query}&page=${pagenum}`,
		);
		setData({ ...data, results: [...data.results, ...res.results] });

		setPagenum(pagenum + 1);
		console.log(res);
	};

	useEffect(() => {
		setPagenum(1);
		initialdata();
	}, [query]);

	return (
		<>
			<Contentwraper>
				<div className="search-heading">search result for {query}</div>
				{loading ? (
					<ExploreSkeleton />
				) : (
					data && (
						<InfiniteScroll
							next={nextdata}
							dataLength={data?.results?.length}
							className={"show-reasults"}
							hasMore={data?.total_pages >= pagenum}
							loader={<h3>loading......</h3>}
						>
							{data?.results?.map((cur_res) => {
								return (
									<Moviecard
										key={cur_res.id}
										cur_res={cur_res}
									/>
								);
							})}
						</InfiniteScroll>
					)
				)}
			</Contentwraper>
		</>
	);
};

export default Searchresult;
