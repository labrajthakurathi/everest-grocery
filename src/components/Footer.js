import React from "react";

const Footer = () => {
	return (
		<div className='socials'>
			<div className='icons'>
				{/* <div className='icon'>
            <i className='fab fa-instagram'></i>
        </div> */}
				<a
					href='https://www.facebook.com/mounteverestdeliandgrocery'
					target='blink'
					className='icon'
				>
					<i className='fab fa-facebook'></i>
				</a>
				<a
					href='https://www.google.com/maps/place/Mount+Everest+Grocery+%26+Deli/@40.7002603,-73.9058742,15z/data=!4m5!3m4!1s0x0:0xc3f79ea7082b12e2!8m2!3d40.7002703!4d-73.9058768'
					target='blink'
					className='icon'
				>
					<i className='fab fa-google'></i>
				</a>
				{/* <div className='icon'>
            <i className='fab fa-yelp'></i>
        </div> */}
			</div>

			<div className='footer-text text-light'>
				<small>
					Design &amp; Developed by{" "}
					<a href='https://labraj.com' target='blink'>
						{" "}
						Lab Raj Thakurathi
					</a>{" "}
				</small>
			</div>
		</div>
	);
};

export default Footer;
