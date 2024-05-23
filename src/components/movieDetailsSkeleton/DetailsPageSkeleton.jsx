import React from "react";
import { Skeleton, Box } from "@mui/material";

const DetailsPageSkeleton = () => {
	return (
		<div className="detalis-sec">
			<div className="detalis-poster">
				<Skeleton
					variant="rectangular"
					width="100%"
					height={520}
					sx={{ bgcolor: "#152C4E", borderRadius: "20px" }}
				/>
			</div>
			<div className="detalis-content">
				<Skeleton
					variant="text"
					width="75%"
					sx={{ fontSize: "2.5rem;", bgcolor: "#152C4E" }}
				/>
				<Skeleton
					variant="text"
					width="30%"
					sx={{ fontSize: "1.2rem", bgcolor: "#152C4E" }}
				/>

				<Skeleton
					variant="circular"
					width={90}
					height={90}
					sx={{ bgcolor: "#152C4E" }}
				/>
				<div>
					<Skeleton
						variant="text"
						width="25%"
						sx={{ fontSize: "1.7rem", bgcolor: "#152C4E" }}
					/>
					<Skeleton
						variant="text"
						width="90%"
						sx={{ fontSize: "1rem", bgcolor: "#152C4E" }}
					/>
					<Skeleton
						variant="text"
						width="80%"
						sx={{ fontSize: "1rem", bgcolor: "#152C4E" }}
					/>
					<Skeleton
						variant="text"
						width="75%"
						sx={{ fontSize: "1rem", bgcolor: "#152C4E" }}
					/>
				</div>
				<Skeleton
					variant="text"
					width="23%"
					sx={{ fontSize: "1rem", bgcolor: "#152C4E" }}
				/>
				<Skeleton
					variant="text"
					width="22%"
					sx={{ fontSize: "1rem", bgcolor: "#152C4E" }}
				/>
				<Skeleton
					variant="text"
					width="21%"
					sx={{ fontSize: "1rem", bgcolor: "#152C4E" }}
				/>
			</div>
		</div>
	);
};

export default DetailsPageSkeleton;
