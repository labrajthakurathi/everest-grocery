import React from "react";
import DeliItem from "./DeliItem";

const Deli = () => {
	const breakfastItems = [
		{
			name: "Butter Croissant",
			price: "2.49",
		},
		{
			name: "Bagel w/Cream Cheese",
			price: "2.49",
		},
		{
			name: "Bacon Egg & Cheese (Turkey)",
			price: "3.99",
		},
		{
			name: "Sausage Egg & Cheese",
			price: "3.99",
		},
		{
			name: "Paratha Wrap (Egg & Cheese)",
			price: "4.49",
		},
	];
	const snacksItem = [
		{
			name: "Chicken Steam Momo",
			price: "8.49",
		},
		{
			name: "Chicken Jhol Momo",
			price: "8.99",
		},
		{
			name: "Chicken Fried Momo",
			price: "8.49",
		},
		{
			name: "Veg (Steam/Jhol/Fried)",
			price: "7.99",
		},
		{
			name: "Chilli (Veg/Chicken)",
			price: "7.99",
		},
		{
			name: "Chowmein (Veg/Chicken)",
			price: "8.99",
		},
		{
			name: "Pani Puri",
			price: "5.99",
		},
		{
			name: "Samosa Chaat",
			price: "5.99",
		},

		{
			name: "Chatpate/Bhelmix",
			price: "5.49",
		},
	];
	return (
		<div className='deli-page'>
			<div className='deli-overlay'></div>
			<div className='heading m-auto'>
				<h1>Breakfast</h1>
				<span className='bg-dark'></span>
			</div>
			<div className='deli-items'>
				{breakfastItems.map((item) => (
					<DeliItem name={item.name} price={item.price} />
				))}
			</div>
			<div className='heading m-auto'>
				<h1>Snacks</h1>
				<span className='bg-dark'></span>
			</div>
			<div className='deli-items'>
				{snacksItem.map((item) => (
					<DeliItem name={item.name} price={item.price} />
				))}
			</div>
			<div className='heading m-auto'>
				<h1>Order Now</h1>
				<span className='bg-dark'></span>
			</div>
			<div className='buttons'>
				<a
					href='https://www.grubhub.com/restaurant/mount-everest-market-deli-inc-5609-myrtle-avenue-ridgewood/3091912'
					className='btn-red'
				>
					Order With Grubhub
				</a>
				<a
					href='https://www.ubereats.com/store/mount-everest-deli-%26-grocery/hmUQ9RViXaaUIlcH5HGpXw?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1PVU5UJTIwRVZFUkVTVCUyMERFTEklMjAlMjYlMjBHUk9DRVJZJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSlhjNXpzQ1pjd29rUjRoSXJDS2VlOThNJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQwLjcwMDIzMzMlMkMlMjJsb25naXR1ZGUlMjIlM0EtNzMuOTA1NjU2NyU3RA%3D%3D&ps=1'
					className='btn-dark'
					target='blink'
				>
					Order With Uber
				</a>
			</div>
		</div>
	);
};

export default Deli;
