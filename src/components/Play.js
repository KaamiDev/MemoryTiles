import React, { useState, useEffect } from 'react';

import Square from './Square';

const Play = () => {
	const [ level, setLevel ] = useState(1);
	const [ clickable, setClickable ] = useState(false);
	const [ isShowing, setIsShowing ] = useState(true);
	const [ pattern, setPattern ] = useState([ 0 ]);
	const [ playing, setPlaying ] = useState(-1);
	const [ starting, setStarting ] = useState(true);

	const squares = Array.from(Array(48).keys()).map((index) => {
		return (
			<Square
				key={index}
				clickable={clickable}
				setPattern={setPattern}
				setLevel={setLevel}
				setClickable={setClickable}
				pattern={pattern}
				playing={playing}
				number={index}
			/>
		);
	});

	useEffect(
		() => {
			const game = async () => {
				setPlaying(-1);
				setStarting(true);
				setClickable(false);
				setIsShowing(false);
				await pause(2000);
				let generatedPattern = await getPattern(level);
				setPattern(generatedPattern);
				setStarting(false);
				await pause(1000);
				await playPattern(generatedPattern);
				console.log(generatedPattern);
				setClickable(true);
				setIsShowing(true);
			};
			game();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ level ]
	);

	const getPattern = (number) => {
		return new Promise((resolve) => {
			resolve(
				Array.from(Array(number), () => {
					return Math.floor(Math.random() * 48);
				})
			);
		});
	};

	const playPattern = async (pattern) => {
		for (let i = 0; i < pattern.length; i++) {
			const num = pattern[i];
			setPlaying(num);
			await pause(1000);
			setPlaying(-1);
			if (i + 1 === pattern.length) {
				return new Promise((resolve) => {
					resolve(true);
				});
			}
		}
	};

	const pause = (duration) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, duration);
		});
	};

	return (
		<div id="play-page">
			<h3 className={`play-caption ${starting ? 'play-caption-ani' : ''}`}>
				{!isShowing ? 'Repeat the pattern below.' : 'Watch carefully for the pattern.'}
			</h3>
			<h6 className="level-small" id={starting ? 'level-big' : ''}>
				Level - 0{level}
			</h6>
			<div className={`square-container ${starting ? 'square-container-ani' : ''}`}>{squares}</div>
		</div>
	);
};

export default Play;
