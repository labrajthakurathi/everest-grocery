import React from "react";
import Wave from "../images/location-wave.svg";
import Fade from "react-reveal/Fade";

const Location = () => {
	return (
		<div className='location-page '>
			<div className='heading m-auto text-light'>
				<h1>Find Us </h1>
				<span className='bg-light'></span>
			</div>
			<div className='content'>
				<div className='form-sec'>
					<div className='gmap-canvas'>
						<iframe
							title='map'
							id='gmap_canvas'
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12099.225775211022!2d-73.9058742!3d40.7002603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3f79ea7082b12e2!2sMount%20Everest%20Grocery%20%26%20Deli!5e0!3m2!1sen!2sus!4v1632787037273!5m2!1sen!2sus'
							frameBorder='0'
							scrolling='no'
							marginHeight='0'
							marginWidth='0'
						/>
					</div>
				</div>

				<div className='contact-info'>
					<div className='item'>
						<div className='icon-wrapper'>
							<i className='fas fa-map-marker-alt'></i>
							<p>Address</p>
						</div>
						<Fade bottom>
							<div className='address'>
								<p>5609 Myrtle Ave, Flushing, NY 11385</p>
								<a
									href='https://www.google.com/maps/dir/37.9903084,-122.2986269/mount+everest+grocery+and+deli+flushing/@31.7938826,-134.529564,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c25c26b073ce5d:0xc3f79ea7082b12e2!2m2!1d-73.9058768!2d40.7002703'
									target='blink'
									className='btn-dark '
								>
									Get Direction <i className='fas fa-location-arrow'></i>
								</a>
							</div>
						</Fade>
					</div>

					<div className='item'>
						<div className='icon-wrapper'>
							<i className='fas fa-clock'></i>
							<p>Hours</p>
						</div>
						<Fade bottom>
							<div className='hours'>
								<div className='day'>
									<p>
										Monday - Friday : <span> 8:00am - 9:00pm</span>
									</p>
									<p>
										Saturday &amp; Sunday : <span> 9:00am - 9:00pm</span>
									</p>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>
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
		</div>
	);
};

export default Location;
