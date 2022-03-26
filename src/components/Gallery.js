import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const Gallery = () => {
	const [current, setCurrent] = useState(0);
	const [slide, setSlide] = useState(false);

	const pics = [
		"https://live.staticflickr.com/65535/51952979263_3f84fdb877_z.jpg",
		"https://live.staticflickr.com/65535/51952979303_723349eff9_z.jpg",
		"https://live.staticflickr.com/65535/51951922777_106063d24a_z.jpg",
		"https://live.staticflickr.com/65535/51951922812_9cc9867a55_z.jpg",
		"https://live.staticflickr.com/65535/51951922842_163af335a4_z.jpg",
		"https://live.staticflickr.com/65535/51951922862_58f50d6151_z.jpg",
		"https://live.staticflickr.com/65535/51953507880_9f9fba22a3_z.jpg",
		"https://live.staticflickr.com/65535/51953215509_b9e17be7c8_z.jpg",
		"https://live.staticflickr.com/65535/51953507910_6bafdf8357_z.jpg",
		"https://live.staticflickr.com/65535/51952979558_88cb5744cf_z.jpg",
		"https://live.staticflickr.com/65535/51953507970_d4a7f9406c_z.jpg",
		"https://live.staticflickr.com/65535/51953508005_59f0d497d0_z.jpg",
		"https://live.staticflickr.com/65535/51952908426_bba5062113_z.jpg",
		"https://live.staticflickr.com/65535/51952979663_8de6b8438d_z.jpg",
		"https://live.staticflickr.com/65535/51952979688_187a43c172_z.jpg",
		"https://live.staticflickr.com/65535/51953215769_b14b198484_z.jpg",
		"https://live.staticflickr.com/65535/51953508155_f58c9bd91a_z.jpg",
		"https://live.staticflickr.com/65535/51952908621_92fa703b4c_z.jpg",
		"https://live.staticflickr.com/65535/51953508235_8b9474305d_z.jpg",
		"https://live.staticflickr.com/65535/51953215844_821026d79f_z.jpg",
		"https://live.staticflickr.com/65535/51953508300_900e20d2f3_z.jpg",
		"https://live.staticflickr.com/65535/51952908726_a25fd8cc9a_z.jpg",
		"https://live.staticflickr.com/65535/51953215924_1a2755c135_z.jpg",
		"https://live.staticflickr.com/65535/51953215974_70bbd52136_z.jpg",
		"https://live.staticflickr.com/65535/51953508405_1b08316ff0_z.jpg",
		"https://live.staticflickr.com/65535/51951923452_c0e7fc9d51_z.jpg",
		"https://live.staticflickr.com/65535/51951923492_c6a9b572e8_z.jpg",
		"https://live.staticflickr.com/65535/51952908856_a489c9b8f0_z.jpg",
		"https://live.staticflickr.com/65535/51952980053_898a6d6d83_z.jpg",
		"https://live.staticflickr.com/65535/51953508485_b8cc37afcb_z.jpg",
		"https://live.staticflickr.com/65535/51951923587_4bb6439e90_z.jpg",
		"https://live.staticflickr.com/65535/51951923607_236165c545_z.jpg",
		"https://live.staticflickr.com/65535/51952909036_c9a7b96b86_z.jpg",
		"https://live.staticflickr.com/65535/51953508570_6ca06d4121_z.jpg",
		"https://live.staticflickr.com/65535/51951923677_f6f6aaab72_z.jpg",
		"https://live.staticflickr.com/65535/51951923707_1220887b38_z.jpg",
		"https://live.staticflickr.com/65535/51952909091_56e2c9323f_z.jpg",
		"https://live.staticflickr.com/65535/51953216299_b1bd7faaf0_z.jpg",
		"https://live.staticflickr.com/65535/51952980328_5ce839decd_z.jpg",
		"https://live.staticflickr.com/65535/51952980343_8b85900299_z.jpg",
		"https://live.staticflickr.com/65535/51952909171_1b0a97a382_z.jpg",
		"https://live.staticflickr.com/65535/51953216384_b68e25990a_z.jpg",
		"https://live.staticflickr.com/65535/51952980403_b1a6a71d2c_z.jpg",
		"https://live.staticflickr.com/65535/51952909216_ebf502c42c_z.jpg",
	];
	const Arrylen = pics.length;
	const handleNext = () => {
		current === pics.length - 1 ? setCurrent(0) : setCurrent(current + 1);
	};

	const handlePrev = () => {
		current === 0 ? setCurrent(pics.length - 1) : setCurrent(current - 1);
	};

	return (
		<div className='gallery-page'>
			<div className='heading m-auto'>
				<h1>Sneak Peek of Our Store</h1>
				<span className='bg-dark'></span>
			</div>

			<div className='gallery-sec'>
				<div className='gallery'>
					{pics.map((pic, index) => (
						<div
							className={index === current ? "slide active" : "slide"}
							key={index}
						>
							<img src={pic} alt={pic} className='img' />
						</div>
					))}
				</div>
				<Fade bottom>
					<div className='dots'>
						{pics.map((pic, index) => (
							<span
								className={index === current ? "current" : ""}
								key={index}
							></span>
						))}
					</div>

					<div className='icons'>
						<div className='item' onClick={handlePrev}>
							<i className='fas fa-arrow-left'></i>
						</div>
						<div className='item' onClick={handleNext}>
							<i className='fas fa-arrow-right'></i>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Gallery;
