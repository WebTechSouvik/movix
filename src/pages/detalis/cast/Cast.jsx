import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch.js";
import { useSelector, useDispatch } from "react-redux";
import Contentwraper from "../../../components/contentwraper/Contentwraper.js";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./style.css";
import dayjs from "dayjs";
import CastSkeleton from "../../../components/castSkeleton/CastSkeleton.jsx"

const Cast = ({ data, loading }) => {
	const [result, setResult] = useState([]);

	const { url } = useSelector((state) => state.home);

	useEffect(() => {
		if (!loading) {
			const newresult = data?.cast.filter((cur_cast) => {
				return cur_cast.known_for_department == "Acting";
			});

			if (newresult) {
				setResult(newresult.slice(0, 6));
			}
		}
	}, [loading]);

	return (
		<>
			<Contentwraper>
				<div className="heading">Top cast</div>

				<div className="cast-items">
					{loading?<CastSkeleton/>:result?.length > 0
						&& result.map((cur) => {
								return (
									<div className="cast-item">
										<div className="cast-img">
											<img
												src={url + cur.profile_path}
												alt=""
											/>
										</div>
										<div className="cast-name">
											{cur.original_name}
										</div>
										<div className="cast-charecter">
											{cur.character}
										</div>
									</div>
								);
						  })
						}
				</div>
			</Contentwraper>
		</>
	);
};

export default Cast;
