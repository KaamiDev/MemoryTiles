import React, { useState } from 'react';

const Square = () => {
	const [ isGreen, setIsGreen ] = useState(false);

	const handleClick = () => {
		setIsGreen(true);
		setTimeout(() => {
			setIsGreen(false);
		}, 1000);
	};

	return <div onClick={handleClick} className={`square ${isGreen ? 'square-green' : ''}`} />;
};

export default Square;
