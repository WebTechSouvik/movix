import React from 'react'
import "./style.css"
const Videopopup = ({videoId,showvideo}) => {
	return (
		<>
		<button className="cancel" onClick={()=>showvideo()}>Close</button>
		<iframe height="400" width="700"    
				src={`https://www.youtube.com/embed/${videoId}`}>   
			</iframe>   
	
		<div className="full-frame" onClick={()=>showvideo()}></div>

			
			
		</>
	)
}

export default Videopopup