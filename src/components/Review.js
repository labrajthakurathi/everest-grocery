import React, { useState } from "react";
import Face3 from "../images/face3.jpg";
import Face7 from "../images/face7.jpg";
import Lalit from "../images/lalit.JPG";
import Testimonial from "./Testimonial";
import { Fade } from "react-reveal";

const Review = () => {
	const [customerReviews] = useState([
		{
			name: "Antonio James",
			pic: Face7,
			review:
				"Needed some indian spices and happen to check this place out. They have a big selection of Indian Grocery",
		},
		{
			name: "Lalit Thakurathi",
			pic: Lalit,
			review:
				"Best part about this store is the Deli. Can never go wrong with few momos after big grocery shopping and location is pretty convenient from where i live",
		},
		{
			name: "Prashant Khanal",
			pic: Face3,
			review:
				"All in one store for my need. I can do Indian/Nepali grocery as well as send some money to Nepal and most importantly, can eat tons of momos as well",
		},
	]);

	const [customerCurrent, setCustomerCurrent] = useState(0);
	const customerLength = customerReviews.length - 1;

	const handlePrevCustomer = () => {
		customerCurrent === 0
			? setCustomerCurrent(customerLength)
			: setCustomerCurrent(customerCurrent - 1);
	};

	const handleNextCustomer = () => {
		customerCurrent === customerLength
			? setCustomerCurrent(0)
			: setCustomerCurrent(customerCurrent + 1);
	};

	return (
		<div className='testimonial'>
			<div className='heading m-auto'>
				<h1>What People Say About Us</h1>
				<span className='bg-dark'></span>
			</div>

			<div className='content'>
				<div className='customer section-wrapper text-center'>
					<div className='arrows'>
						<i
							className='fas fa-chevron-left ml-2'
							onClick={handlePrevCustomer}
						></i>
						<i
							className='fas fa-chevron-right mr-2'
							onClick={handleNextCustomer}
						></i>
					</div>
					{customerReviews.map((res, index) => (
						<div
							className={index === customerCurrent ? "active" : "slide"}
							key={index}
						>
							<Testimonial data={res} />
						</div>
					))}
					<div className='dots'>
						{customerReviews.map((res, index) => (
							<div
								className={index === customerCurrent ? "current dot" : "dot"}
								key={index}
							></div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
