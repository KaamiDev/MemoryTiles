import React, { useState, useEffect } from 'react';

const Square = (props) => {
	let soundfx = new Audio('/sounds/' + (props.number + 1) + '.mp3');
	let wrongfx = new Audio('/sounds/wrong.mp3');
	const [ isGreen, setIsGreen ] = useState(false);
	const [ isRed, setIsRed ] = useState(false);

	useEffect(
		() => {
			if (props.playing === props.number && !props.clickable) {
				turnGreen();
			} else if (props.losingSquare === props.number) {
				setIsRed(true);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ props ]
	);

	const turnGreen = () => {
		soundfx.play();
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
		if (props.number === props.pattern[0]) {
			turnGreen();
			props.setPattern((pattern) => pattern.slice(1));
			if (props.pattern.length <= 1) {
				props.setClickable(false);
				setTimeout(() => {
					props.setLevel((lvl) => lvl + 1);
				}, 1000);
			}
		} else {
			wrongfx.play();
			props.setClickable(false);
			props.setLosingSquare(props.pattern[0]);
		}
	};

	return (
		<div
			onClick={props.clickable ? handleClick : () => false}
			style={{ cursor: props.clickable ? 'pointer' : '' }}
			className={`square ${isGreen ? 'square-green' : isRed ? 'square-red' : ''}`}
		/>
	);
};

export default Square;
