import React, { useState, useEffect } from 'react';

const Square = (props) => {
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
					if (parseInt(localStorage.getItem('highscore-' + props.difficulty)) < props.level + 1) {
						localStorage.setItem('highscore-' + props.difficulty, (props.level + 1).toString());
					}
					props.setLevel((lvl) => lvl + 1);
				}, 1000);
			}
		} else {
			props.setClickable(false);
			props.setLosingSquare(props.pattern[0]);
			setTimeout(() => {
				props.setIsGameOver(true);
			}, 1000);
		}
	};

	return (
		<div
			onClick={props.clickable ? handleClick : () => false}
			style={{ cursor: props.clickable ? 'pointer' : '' }}
			className={`square ${'square-' + props.difficulty} ${isGreen ? 'square-green' : isRed ? 'square-red' : ''}`}
		/>
	);
};

export default Square;
