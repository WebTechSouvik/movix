import React from "react";
import { Skeleton, Box } from "@mui/material";
const CastSkeleton = () => {
	return [1, 2, 3, 4, 5, 6].map(() => (
		<div className="cast-item">
			<Skeleton
				variant="circular"
				width="100%"
				height="100%"
				sx={{ bgcolor: "#152C4E" }}
			/>
		</div>
	));
};

export default CastSkeleton;
