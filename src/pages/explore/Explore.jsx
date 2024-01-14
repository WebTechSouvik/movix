import React, { useState, useEffect } from "react";
import Contentwraper from "../../components/contentwraper/Contentwraper";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import { getDataFromApi } from "../../api/Api.js";
import Moviecard from "../../components/moviecard/Moviecard.jsx";
import "./style.css";
import InfiniteScroll from "react-infinite-scroll-component";
import SelectCatagory from "../../components/selecteCatagory/SelectCatagory.jsx";

const Explore = () => {
	const { mediaType } = useParams();
	const [data, setData] = useState(null);
	const [loading, setloading] = useState(false);
	const [pagenum, setPagenum] = useState(1);
	const [generes, setgeneres] = useState();
	const [params, setParams] = useState();

	const getgenre = async () => {
		const { genres: allgenere } = await getDataFromApi(
			`/genre/${mediaType}/list`,
		);

		// console.log(allgenere)
		setgeneres(allgenere);
	};

	const resultShowBygenere = (e) => {
		// console.log(e.target.id)
		e.stopPropagation();
		const oldParams = params?.split(",");
		const isPresent = oldParams?.some((opt) => opt == e.target.id);
		if (!isPresent) {
			setParams((prev) => {
				if (!prev) {
					return e.target.id.toString();
				}

				return prev + "," + e.target.id.toString();
			});
		}
	};

	const cancelOption = (e) => {
		// const repalce=/`${e.target.id},`|`${e.target.id}`/
		const newParams = params?.replace(
			new RegExp(`${e.target.id},|${e.target.id}`),
			"",
		);

		console.log(params, newParams);
		setParams(newParams);
	};
	useEffect(() => {
		// const parameter={
		// 	 with_genres:params
		// }

		initialdata(params);
	}, [params]);

	const initialdata = async (parameter) => {
		setPagenum(1);
		setloading(true);
		const res = await getDataFromApi(
			`/discover/${mediaType}`,
			1,
			parameter,
		);
		setData(res);
		setloading(false);
		setPagenum((prev) => prev + 1);
		// console.log(pagenum);
	};

	const nextdata = async (parameter) => {
		setloading(true);
		const res = await getDataFromApi(
			`/discover/${mediaType}`,
			pagenum,
			parameter,
		);
		setData({ ...data, results: [...data.results, ...res.results] });
		setloading(false);
		setPagenum(pagenum + 1);
		console.log(res);
		console.log(pagenum);
	};

	useEffect(() => {
		setPagenum(1);
		console.log(pagenum);
		setData(null);
		initialdata();
		getgenre();
	}, [mediaType]);

	return (
		<>
			<Contentwraper>
				<div className="search-heading">
					<div className="search-heading-text">Explore {mediaType}</div>
					{generes && (
						<SelectCatagory
							generes={generes}
							resultShowBygenere={resultShowBygenere}
							params={params}
							cancelOption={cancelOption}
						/>
					)}
				</div>

				{data && (
					<InfiniteScroll
						next={() => nextdata(params)}
						dataLength={data?.results?.length}
						className={"show-reasults"}
						hasMore={data?.total_pages >= pagenum}
						loader={<h3>loading......</h3>}
					>
						{data &&
							data?.results?.map((cur_res) => {
								return (
									<Moviecard
										key={cur_res.id}
										cur_res={cur_res}
										mediaType={mediaType}
									/>
								);
							})}
					</InfiniteScroll>
				)}
			</Contentwraper>
		</>
	);
};

export default Explore;
