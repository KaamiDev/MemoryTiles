import React, { useState } from 'react';

const Square = () => {
	const [ isGreen, setIsGreen ] = useState(false);

	const turnGreen = () => {
		setIsGreen(true);
		setTimeout(() => {
			setIsGreen(false);
		}, 1000);
	};

	const handleClick = () => {
		turnGreen();
	};

	return <div onClick={handleClick} className={`square ${isGreen ? 'square-green' : ''}`} />;
};

export default Square;
