import React,{useState,useEffect} from 'react'
import Contentwraper from "../../components/contentwraper/Contentwraper"
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js"
import {getDataFromApi} from "../../api/Api.js"
import Moviecard from "../../components/moviecard/Moviecard.jsx"
import "./style.css"
 import InfiniteScroll from 'react-infinite-scroll-component';


const Explore = () => {
	 const {mediaType} = useParams();
	 const [data, setData]=useState(null)
	 const [loading,setloading]=useState(false)
	 const [pagenum,setPagenum]=useState(1)
	
	
	
	 const initialdata= async()=>{
	  setloading(true)
	 	const res=await getDataFromApi(`/discover/${mediaType}?&page=1`)
	 	setData(res)
	 	setloading(false)
	 	setPagenum((prev)=>prev+1)
	 	 console.log(pagenum)
	 }

	  const nextdata=async()=>{
	 	 setloading(true)
	 	const res=await getDataFromApi(`/discover/${mediaType}?&page=${pagenum}`)
	 	setData({...data,results:[...data.results,...res.results]})
	 	setloading(false)
	 	setPagenum(pagenum+1)
	 	 console.log(res)
	 	 console.log(pagenum)
	 }



	  useEffect(() => {
		setPagenum(1)
	 	console.log(pagenum)
	 	setData(null)
	 	initialdata()

	 }, [mediaType])


	return (
		<>
			<Contentwraper>
			<div className="search-heading">Explore {mediaType}</div>
			{data && <InfiniteScroll 
			next={nextdata}
			dataLength={data?.results?.length}
			className={"show-reasults"}
			hasMore={data?.total_pages>=pagenum}
			loader={<h3>loading......</h3>}
			>
			
			{
				data &&	data?.results?.map((cur_res)=>{
						return <Moviecard key={cur_res.id} cur_res={cur_res} mediaType={mediaType}/>
					})
				}
			

			</InfiniteScroll> }		
			</Contentwraper>
		</>
	)
}

export default Explore