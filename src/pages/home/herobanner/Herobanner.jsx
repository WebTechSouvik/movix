import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux"
import useFetch from "../../../hooks/useFetch.js"
// 
import "./herobanner.css"
import { useNavigate, useLocation } from "react-router-dom";

const Herobanner = () => {
	
	const {data,loading}=useFetch("/movie/upcoming")
	const [query , setQuery]=useState("")
	
	 const { url } = useSelector((state) => state.home);
	   const navigate = useNavigate();

	 const [backGround, setbackGround] = useState("")

const setImgUrl=()=>{
  const bg=url + data?.results[Math.floor(Math.random()*20)]?.backdrop_path
      setbackGround(bg)      

}

 useEffect(() => {
 	

 	setImgUrl()
 
 }, [data])

	return (
		<>
			<div className="herobanner">
				<div className="hero-img">
					{!loading && <img src={backGround} />}
				</div>
				<div className="graidiant"></div>
				<div className="hero-content">
					<h1>welcome</h1>
					<p>Millons of Movies and Tv show to discovers.Explore now</p>
					<div className="hero-search">
						<input type="text" placeholder="search here..." value={query} onChange={(e)=>setQuery(e.target.value)}/>
						<button onClick={()=>navigate(`/search/${query}`)}>SCEARCH</button>
					
					</div>
				</div>
			</div>
			
							
		</>
	)
}

export default Herobanner