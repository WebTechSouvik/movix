import React, {useState,useEffect} from 'react'
import Nabvar from "../../components/navbar/Nabvar.jsx"
import Detalisbanner from "./detalisBanner/Detalisbanner.jsx"
import Cast from "./cast/Cast.jsx"
import Videos from "./videos/Videos.jsx"
import Smilar from "./similar/Smilar.jsx"
import Recomendation from "./recomendation/Recomendation.jsx"
import useFetch from "../../hooks/useFetch.js"
import { useParams } from "react-router-dom";
const Detalis = () => {
	  const { mediaType, id } = useParams();

	const [director, setDirecotor] = useState([])
	const [writter, setWritter] = useState([])

	
		const {data,loading}=useFetch(`/${mediaType}/${id}`)

	const {data:Data,loading:Loading}=useFetch(`/${mediaType}/${id}/credits`)
useEffect(() => {
	
	if(Data){
	const Newderector=	Data.crew.filter((cur)=>{
		return cur.job=="Director"
	})

		const Newwriter=	Data.crew.filter((cur)=>{
		return cur.job === "Screenplay" || cur.job === "Story" || cur.job === "Writer"
})

console.log(Newwriter)
	setDirecotor(Newderector)
	setWritter(Newwriter)
}
}, [Data])

	return (
		<>
	
		<Detalisbanner  mediaType={ mediaType}id={id} director={director} writter={writter}/>
		<Cast data={Data} loading={Loading}/>
		<Videos id={id}  mediaType={ mediaType}/>
		<Smilar id={id}  mediaType={ mediaType}/>
		<Recomendation id={id}  mediaType={ mediaType}/>
	
		

		</>
	)
}

export default Detalis