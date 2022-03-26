import React, { useState } from "react";
import Wave from "../images/location-wave.svg";
import Fade from "react-reveal/Fade";

const Contact = () => {
	const [contactData, setContactData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		setContactData({ ...contactData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(contactData);
	};
	return (
		<div className='contact-page' id='contact-us'>
			<div className='heading  m-auto'>
				<h1>Get in Touch With Us</h1>
				<span className='bg-dark'></span>
			</div>
			<div className='content'>
				<div className='form-sec'>
					<form
						method='POST'
						data-netlify-recaptcha='true'
						netlify-honeypot='bot-field'
						data-netlify='true'
						name='Mount Everest Grocery Form'
					>
						<p style={{ display: "none" }}>
							<label>Don't Fill This Out If You're Human:"</label>
							<input name='bot-field' />
						</p>
						<input type='hidden' name='form-name' value='contact' />
						<div className='item'>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								name='name'
								onChange={handleChange}
								value={contactData.name}
								required
							/>
						</div>
						<div className='item'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								onChange={handleChange}
								value={contactData.email}
								required
							/>
						</div>
						<div className='item'>
							<label htmlFor='name'>Message</label>
							<textarea
								rows='6'
								col='1'
								type='text'
								name='message'
								onChange={handleChange}
								value={contactData.message}
								required
							/>
						</div>
						<div className='item'>
							<button className='btn-accent w-100'>Submit</button>
						</div>
					</form>
				</div>

				<div className='contact-info'>
					<Fade bottom>
						<div className='item'>
							<div className='icon-wrapper'>
								<i className='fas fa-phone-alt'></i>
								<p>718-417-1819</p>
							</div>
							<a href='tel:+17184171819' className='btn-dark '>
								Call Us
							</a>
						</div>
					</Fade>

					<Fade bottom>
						<div className='item'>
							<div className='icon-wrapper'>
								<i className='fas fa-envelope'></i>
								<p>MountEverestMarket111@gmail.com</p>
							</div>
							<a
								href='mailto:mounteverestmarket111@gmail.com'
								className='btn-dark '
							>
								Email Us
							</a>
						</div>
					</Fade>
				</div>
			</div>

			<img src={Wave} alt='' className='contact-wave' />
		</div>
	);
};

export default Contact;
