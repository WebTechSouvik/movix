import React, { useState, useEffect } from "react";
import movixlogop from "../../assets/movix-logo.png";
import movixlogos from "../../assets/movix-logo.svg";
import "./navbar.css";
import Contentwraper from "../contentwraper/Contentwraper.js";
import { useNavigate, useLocation } from "react-router-dom";

const Nabvar = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(true);
	const [showmenu, setShowmenu] = useState(false);

	const scrollhandel = () => {
		if (window.scrollY > 250 && !showmenu) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	window.addEventListener("scroll", scrollhandel);

	return (
		<>
			<div
				className={`nabvar ${!show ? "hide-navbar" : ""} ${
					showmenu ? "dark" : ""
				}`}
			>
				<div className="nav-container">
					<div className="nav-logo" onClick={() => navigate("/")}>
						<img className="first-logo" src={movixlogos} alt="" />
					</div>
					<div className="navbar-text">
						<ul>
							<li onClick={() => navigate("/explore/movie")}>
								movies
							</li>
							<li onClick={() => navigate("/explore/tv")}>
								Tv show
							</li>
							<li>
								<i class="fas fa-search"></i>
							</li>
						</ul>
					</div>
					<div
						className="nav-toggole"
						onClick={() => setShowmenu(!showmenu)}
					>
						{!showmenu ? (
							<i class="fa-solid fa-bars"></i>
						) : (
							<i class="fa-solid fa-x"></i>
						)}
					</div>
				</div>
			</div>

			<div
				className={`mobile-menu ${!showmenu ? "hide-mobile-menu" : ""}`}
			>
				<ul>
					<li onClick={() => navigate("/explore/movie")}>movies</li>
					<li onClick={() => navigate("/explore/tv")}>tv show</li>
				</ul>
			</div>
		</>
	);
};

export default Nabvar;
