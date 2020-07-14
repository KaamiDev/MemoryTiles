import React, { useState, useEffect } from 'react';

const Square = (props) => {
	const [ isGreen, setIsGreen ] = useState(false);

	useEffect(
		() => {
			if (props.playing === props.number) {
				turnGreen();
			}
		},
		[ props ]
	);

	const turnGreen = () => {
		setIsGreen(true);
		setTimeout(() => {
			setIsGreen(false);
		}, 1000);
	};

	const handleClick = () => {
		turnGreen();
	};

	return (
		<div
			onClick={props.clickable ? handleClick : () => false}
			style={{ cursor: props.clickable ? 'pointer' : '' }}
			className={`square ${isGreen ? 'square-green' : ''}`}
		/>
	);
};

export default Square;
