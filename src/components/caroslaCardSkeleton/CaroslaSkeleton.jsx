import React from "react";
import { Skeleton, Box } from "@mui/material";
import "./style.css"

function CaroslaSkeleton() {
	return [1, 2, 3, 4, 5, 6].map(() => (
		<div className="each_sekeleton">
			<Skeleton
				variant="rounded"
				width="100%"
				height="75%"
				sx={{ borderRadius: "19px", bgcolor: "#152C4E" }}
			/>
			<Skeleton sx={{ bgcolor: "#152C4E" }} />
			<Skeleton  sx={{ bgcolor: "#152C4E" }} />
		</div>
	));
}

export default CaroslaSkeleton;
