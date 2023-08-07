import React from 'react'
import Nabvar from "../../components/navbar/Nabvar.jsx"
import Herobanner from "./herobanner/Herobanner.jsx"
import Trending from "./trending/Trending.jsx"
import Popular from "./popular/Popular.jsx"
import Toprated from "./toprated/Toprated"

const Home = () => {
	return (
		<>
	
		<Herobanner/>
		<Trending/>
		<Popular/>
		<Toprated/>

	
			
		</>
	)
}

export default Home