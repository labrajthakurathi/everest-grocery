import React, { useState, useEffect } from "react";
import Wave from "../images/landing-wave-vertical.png";
import Wave2 from "../images/landing-wave.png";
import Fade from "react-reveal/Fade";

const Landing = () => {
	const [scrollPos, setScrollPos] = useState(window.scrollY);
	const [width, setWidth] = useState(window.innerWidth);

	document.addEventListener("scroll", () => {
		setScrollPos(window.scrollY);
	});

	useEffect(() => {
		const getWidth = () => {
			const iWidth = window.innerWidth;
			setWidth(iWidth);
		};
		window.addEventListener("resize", getWidth);
	}, []);

	const moveCart = {
		marginLeft: scrollPos,
	};

	return (
		<>
			<div className='landing-page'>
				<div className='wave'>
					<img src={width > 1040 ? Wave2 : Wave} alt='' />
				</div>
				<div className='landing-content'>
					<img
						src='https://live.staticflickr.com/65535/51962773708_6e81dcbbab_o.png'
						alt=''
						className='cart'
						style={moveCart}
					/>
					<Fade>
						<div className='texts'>
							<h1>Latin, Asian and European Grocery at Your Neighbourhood</h1>
							<a href='tel:+17184171819' className='btn-accent w-100'>
								Call Us{" "}
							</a>
						</div>
					</Fade>
				</div>
			</div>
		</>
	);
};

export default Landing;
