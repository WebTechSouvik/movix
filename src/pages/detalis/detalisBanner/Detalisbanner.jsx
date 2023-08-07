import React,{useEffect,useState} from 'react'
import useFetch from "../../../hooks/useFetch.js"
import { useSelector, useDispatch } from "react-redux"
import Contentwraper from  "../../../components/contentwraper/Contentwraper.js"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "./style.css"
import dayjs from "dayjs";

const Detalisbanner = ({id, director,writter, mediaType}) => {
	const {data,loading}=useFetch(`/${ mediaType}/${id}`)
	 const { url } = useSelector((state) => state.home);
	 console.log(writter)
	
	const [time, setTime] = useState("")

	useEffect(() => {

		let hour=0
		let minit=0
		
		if(!loading){
		hour=Math.floor(data?.runtime/60)
		minit=data?.runtime%60
		setTime(`${hour}h ${minit}m`)
	}
	}, [loading])

	return (
		<>
			<div className="detalisbanner">
				<div className="hero-img">
					{!loading && <img src={url+data?.backdrop_path} />}
				</div>
				<div className="graidiant"></div>
				<Contentwraper>
				<div className="detalis-sec">
					<div className="detalis-poster">
						<img src={url + data?.poster_path} alt=""/>
					</div>
					<div className="detalis-content">
					<div className="detalis-heading">
						<div>{data?.title||data?.original_name} ({dayjs(data?.release_date).format("YYYY")})</div>
						<p>{data?.tagline}</p>
					</div>
					<div className="video-rating">
					 <div className="ratings"><CircularProgressbar 
									  value={data?.vote_average} 
									  text={data?.vote_average.toFixed(1)}
									  maxValue={10}
									  className={"rating"}
									  styles={buildStyles({ 
											    textSize: '30px',
											    pathTransitionDuration: 0.5,

											    // Colors
											    pathColor: data?.vote_average>7 ? "green": data?.vote_average>5? "orange" :"red",
											    textColor: 'black',
											    fontWeight:"bold",
											    trailColor: 'white',
											    backgroundColor: 'blue',
  														})}/>
									  </div>
						
					</div>
					<div className="overviw">
						<div className="overvie-title">Overview</div>
						<div className="overviw-content">{data?.overview}</div>
					</div>
					<div className="others-detalis">
						<div className="status">
							<div>Status:<span className="content">  {data?.status}</span></div>
							{ mediaType=='movie'?<><div>relase date:<span> {data?.release_date}</span></div>
							<div>Runtime: <span>{time}</span></div></>: " "}
						
						</div>
						<div className="director">Director:  <span>{director.length>0?director[0]?.name:""}</span></div>
						<div className="writer">writer:  {writter.length>0? writter.length<2? (<span>{writter[0].name}</span>):writter.map((cur,i)=>{
							if(i==writter.length-1){
								return<span>{cur.name}</span>
							}
							return <span>{cur.name}, </span>
						}):""}</div>
					
				

				</div>
				</div>
				</div>

				</Contentwraper>
				
			</div>
			
		</>
	)
}

export default Detalisbanner