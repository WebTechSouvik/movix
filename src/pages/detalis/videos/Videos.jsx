import React,{useEffect,useState} from 'react'
import useFetch from "../../../hooks/useFetch.js"
import { useSelector, useDispatch } from "react-redux"
import Contentwraper from  "../../../components/contentwraper/Contentwraper.js"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "./style.css"
import dayjs from "dayjs";
import Videopopup from "../../../components/videopopup/Videopopup.jsx"


const Videos = ({id, mediaType}) => {
	const [show, setShow] = useState(false)
	const [videoId , setVideoId]=useState("")
	const {data,loading}=useFetch(`/${ mediaType}/${id}/videos`)
	const showvideo=(youtube_id)=>{
		setShow(!show)
		setVideoId(youtube_id)
	}
	return (
		<>
		<Contentwraper>
		<div className="heading">Oficial Videos</div>
		<div className="video-items">
		{
			data?.results.map((each)=>(
				<div key={each.key}className="video-item">

				<img src={`https://img.youtube.com/vi/${each.key}/mqdefault.jpg`} alt=""/>
				<div className="video-info">{each.name}</div>
				<div className="play-icon" onClick={()=>showvideo(each.key)}><i class="fa-brands fa-youtube"><div className="white"></div></i></div>
			</div>
			
			))
		}
			
		</div>

		</Contentwraper>
		{show && <Videopopup videoId={videoId} showvideo={showvideo}/>}
			
		</>
		
	)
}

export default Videos