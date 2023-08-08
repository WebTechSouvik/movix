import React, { useState, useEffect } from "react";
import Contentwraper from "../contentwraper/Contentwraper";
import { useSelector, useDispatch } from "react-redux";
import "./carosal.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import dayjs from "dayjs";
import noposter from "../../assets/no-poster.png";
import { useNavigate, useLocation } from "react-router-dom";

const Carosal = ({ data, loading, end, mediaType }) => {
	const navigate = useNavigate();
	const [scroll, setScroll] = useState(0);

	const { url } = useSelector((state) => state.home);

	const carosalMove = (val) => {
		console.log("hi");
		const elements = document.getElementsByClassName("carsal_scroll");
		const elements1 = document.getElementsByClassName("main-carosal-sec");
		const maxscroll = elements[0].scrollWidth - elements1[0].offsetWidth;
		console.log(maxscroll);

		let newscroll = scroll + val;
		console.log(newscroll);
		if (newscroll >= -maxscroll && newscroll <= 0) {
			setScroll(newscroll);

			//
		}
	};
	useEffect(() => {
		setScroll(0);
	}, [data]);

	return (
		<>
			<Contentwraper>
				<div className="main-carosal-sec">
					<div
						className="carsal_scroll"
						style={{ transform: `translateX(${scroll}px)` }}
					>
						{data?.results?.map((cur_res) => {
							let bg_path = "";
							!cur_res.poster_path
								? (bg_path = noposter)
								: (bg_path = url + cur_res.poster_path);
							const rating = cur_res.vote_average.toFixed(1);

							return (
								<div
									className="each-carosal"
									onClick={() =>
										navigate(
											`/${
												cur_res.media_type ||
												end ||
												mediaType
											}/${cur_res.id}`,
										)
									}
								>
									<div className="each-carosal-img">
										<LazyLoadImage
											className="img1"
											alt={"hello"}
											effect="blur"
											src={bg_path}
										/>
									</div>
									<div className="movie_rating">
										<CircularProgressbar
											value={rating}
											text={rating}
											maxValue={10}
											className={"rating"}
											styles={buildStyles({
												textSize: "30px",
												pathTransitionDuration: 0.5,

												// Colors
												pathColor:
													rating > 7
														? "green"
														: rating > 5
														? "orange"
														: "red",
												textColor: "black",
												fontWeight: "bold",
												trailColor: "white",
												backgroundColor: "blue",
											})}
										/>
									</div>

									<div className="carosal-content">
										<div className="carosal-title">
											{cur_res.title || cur_res.name}
										</div>
										<div className="date">
											{dayjs(
												cur_res?.release_date ||
													cur_res?.first_air_date,
											).format("MMMM D, YYYY")}
										</div>
									</div>
								</div>
							);
						})}
					</div>

					<div
						onClick={() => carosalMove(-683.75)}
						className="left-carosal"
					>
						<i class="fa-solid fa-circle-arrow-right"></i>
					</div>
					<div
						onClick={() => carosalMove(683.75)}
						className="right-carosal"
					>
						<i class="fa-solid fa-circle-arrow-left"></i>
					</div>
				</div>
			</Contentwraper>
		</>
	);
};

export default Carosal;
