import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Square from './Square';

import arrowIcon from '../icons/arrow-icon.svg';

const Play = () => {
	const [ level, setLevel ] = useState(1);
	const [ isGameOver, setIsGameOver ] = useState(false);
	const [ clickable, setClickable ] = useState(false);
	const [ losingSquare, setLosingSquare ] = useState(-1);
	const [ isShowing, setIsShowing ] = useState(true);
	const [ pattern, setPattern ] = useState([ 0 ]);
	const [ playing, setPlaying ] = useState(-1);
	const [ starting, setStarting ] = useState(true);
	const [ hovering, setHovering ] = useState(false);

	const squares = Array.from(Array(48).keys()).map((index) => {
		return (
			<Square
				key={index}
				clickable={clickable}
				setPattern={setPattern}
				level={level}
				setLevel={setLevel}
				losingSquare={losingSquare}
				setLosingSquare={setLosingSquare}
				setIsGameOver={setIsGameOver}
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
				if (!localStorage.getItem('highscore')) {
					localStorage.setItem('highscore', '1');
				}
				setPlaying(-1);
				setLosingSquare(-1);
				setStarting(true);
				setClickable(false);
				setIsShowing(true);
				await pause(2000);
				let generatedPattern = await getPattern(level);
				setPattern(generatedPattern);
				setStarting(false);
				await pause(1000);
				await playPattern(generatedPattern);
				setClickable(true);
				setIsShowing(false);
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
		<div>
			<div style={{ display: isGameOver ? 'none' : '' }} id="play-page">
				<h3 className={`play-caption ${starting ? 'play-caption-ani' : ''}`}>
					{!isShowing ? 'Repeat the pattern below.' : 'Watch carefully for the pattern.'}
				</h3>
				<h6 className="level-small" id={starting ? 'level-big' : ''}>
					Level - {level >= 10 ? '' : '0'}
					{level}
				</h6>
				<div style={{ display: starting ? 'none' : '' }} className={`square-container square-container-ani`}>
					{squares}
				</div>
			</div>
			<div style={{ display: isGameOver ? '' : 'none' }} id="gameover-page">
				<h3>Game Over</h3>
				<p className="gameover-caption">
					You got to level {level >= 10 ? '' : '0'}
					{level}!<br />
					The highest you've ever gone is {parseInt(localStorage.getItem('highscore')) >= 10 ? '' : '0'}
					{localStorage.getItem('highscore')}.
				</p>
				<Link to="/" onMouseOver={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
					<p style={{ marginTop: 0, marginBottom: 0 }}>Home</p>
					<img
						src={arrowIcon}
						style={{ marginTop: -10, marginBottom: -10 }}
						className={hovering ? 'hovering-btn' : ''}
						alt="arrow icon"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Play;
