import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [show, setShow] = useState(false);
	return (
		<div className='header-container'>
			<nav>
				<div
					className={menuOpen ? "hamburger open" : "hamburger"}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className='logo'>
					<Link to='/'>
						{" "}
						<img
							src='https://live.staticflickr.com/65535/52078193037_a8523cc475_o.png'
							alt='mt everest logo'
						/>
					</Link>
				</div>
			</nav>
			<header className={menuOpen ? "list-wrapper open" : "list-wrapper"}>
				<ul>
					<Link to='/'>
						<li onClick={() => setMenuOpen(!menuOpen)}>Home</li>
					</Link>
					<a href='/#services'>
						<li onClick={() => setMenuOpen(!menuOpen)}>Services</li>
					</a>

					<a href='/#contact-us'>
						{" "}
						<li onClick={() => setMenuOpen(!menuOpen)}>Contact Us</li>
					</a>

					<Link to='/deli'>
						{" "}
						<li className='deli-btn' onClick={() => setMenuOpen(!menuOpen)}>
							Deli
						</li>
					</Link>
				</ul>
			</header>
		</div>
	);
};

export default Header;
