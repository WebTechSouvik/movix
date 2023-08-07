import React from 'react'
import "./footer.css"

const Footer = () => {
	return (
		<>
		<div className="footer">
			<div className="footer-title">
				<ul>
					<li>Terms of use</li>
					<li>Privacy and policy</li>
					<li>About </li>
					<li>Blog</li>
					<li>FAQ</li>
				</ul>
			</div>
			<div className="footer-dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
		<div className="footer-icons">
			<div className="icon"><i class="fa-brands fa-facebook-f"></i></div>
			<div className="icon"><i class="fa-brands fa-instagram"></i></div>
			<div className="icon"><i class="fa-brands fa-twitter"></i></div>
			<div className="icon"><i class="fa-brands fa-linkedin"></i></div>
				
		</div>
		</div>	
		</>
	)
}

export default Footer