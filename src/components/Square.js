import React, { useState, useEffect } from 'react';

const Square = (props) => {
	const [ isGreen, setIsGreen ] = useState(false);

	useEffect(
		() => {
			if (props.playing === props.number && !props.clickable) {
				turnGreen();
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ props ]
	);

	const turnGreen = () => {
		if (isGreen === true) {
			setIsGreen(false);
			setTimeout(() => {
				setIsGreen(true);
				setTimeout(() => {
					setIsGreen(false);
				}, 1000);
			}, 1);
		} else {
			setIsGreen(true);
			setTimeout(() => {
				setIsGreen(false);
			}, 1000);
		}
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
