import React from "react";

const DeliItem = ({ name, price }) => {
	return (
		<div className='deli-item'>
			<p className='name'>{name}</p>
			<p className='price'>{price}</p>
		</div>
	);
};

export default DeliItem;
