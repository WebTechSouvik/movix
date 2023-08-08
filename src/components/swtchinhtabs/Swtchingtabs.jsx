import React, { useState } from "react";
import Contentwraper from "../contentwraper/Contentwraper";
import "./style.css";
const Swtchingtabs = ({ buttonType, heading, tabChange }) => {
	const [left, setleft] = useState(0);

	const bgChange = (index, type) => {
		setleft(index * 100);

		tabChange(type);
	};

	return (
		<>
			<Contentwraper>
				<div className="carosal-heading">
					<div className="carosal-head-text">{heading}</div>
					<div className="carosal-btn">
						{buttonType.map((type, i) => (
							<button key={i} onClick={() => bgChange(i, type)}>
								<div className="z">{type}</div>
							</button>
						))}
						<div
							className="bg"
							style={{ transform: `translateX(${left}%)` }}
						></div>
					</div>
				</div>
			</Contentwraper>
		</>
	);
};

export default Swtchingtabs;
