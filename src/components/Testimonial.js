import React from "react";
import Fade from "react-reveal/Fade";

const Testimonial = ({ data: { name, pic, review } }) => {
	return (
		<>
			<div className='reviews '>
				<div className='top'>
					<img src={pic} alt='' />
				</div>

				<div className='bottom'>
					<p className='name'>{name}</p>
					<span></span>
					<Fade bottom>
						<p className='text muted'>
							<i className='fas fa-quote-left text-accent m-1'></i> {review}{" "}
							<i className='fas fa-quote-right text-accent m-1'></i>
						</p>
					</Fade>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
