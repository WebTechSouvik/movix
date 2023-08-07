import React from 'react'
import "./style.css"
import { useSelector, useDispatch } from "react-redux"
import "./style.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import dayjs from "dayjs";
import noposter from "../../assets/no-poster.png"
import { useNavigate, useLocation } from "react-router-dom";

const Moviecard = ({cur_res,mediaType}) => {
	const navigate=useNavigate()

 	const { url } = useSelector((state) => state.home);
	let bg_path=""
	!cur_res.poster_path ?  bg_path= noposter  : bg_path=url + cur_res.poster_path 
	const rating=cur_res?.vote_average?.toFixed(1)

	return (
		<div className="search-carosal" onClick={()=>navigate(`/${cur_res.media_type||mediaType}/${cur_res.id}`)} ><div className="search-carosal-img">
									   <LazyLoadImage
										className="img1"
    									alt={"hello"}
									    effect="blur"
									    src={bg_path}
									     />
									      </div>
									{/*  <div className="movie_rating"><CircularProgressbar 
									  value={rating} 
									  text={rating}
									  maxValue={10}
									  className={"rating"}
									  styles={buildStyles({ 
											    textSize: '30px',
											    pathTransitionDuration: 0.5,

											    // Colors
											    pathColor: rating>7 ? "green": rating>5? "orange" :"red",
											    textColor: 'black',
											    fontWeight:"bold",
											    trailColor: 'white',
											    backgroundColor: 'blue',
  														})}/>
									  </div>*/}

									  <div className="search-content">
									  	<div className="search-title">{cur_res.title || cur_res.name}</div>
									  	<div className="date">
										{dayjs(cur_res?.release_date || cur_res?.first_air_date).format('MMMM D, YYYY')}</div>
									  </div>

									 
									  </div>
	)
}

export default Moviecard