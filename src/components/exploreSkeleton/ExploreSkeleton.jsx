import React from 'react'
import { Skeleton, Box } from "@mui/material";
import "./style.css"

const ExploreSkeleton = () => {
	return <div className="show-reasults"> {[1, 2, 3, 4, 5, 6,7,8,9,10].map(() => (
		<div className="show-reasults-skeleton">
			<Skeleton
				variant="rectangular"
				width="100%"
				height="80%"
				sx={{ borderRadius: "19px", bgcolor: "#152C4E" }}
			/>
			<Skeleton sx={{ bgcolor: "#152C4E" }} />
			<Skeleton width="30%" sx={{ bgcolor: "#152C4E" }} />
		</div>
	))}
	</div>
}

export default ExploreSkeleton