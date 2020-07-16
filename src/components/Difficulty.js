import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../icons/arrow-icon.svg';

const Difficulty = () => {
	const [ hovering, setHovering ] = useState('');

	return (
		<div id="difficulty-page">
			<h3>Select a difficulty level below.</h3>
			<Link to="/play/easy" onMouseOver={() => setHovering('easy')} onMouseLeave={() => setHovering('')}>
				<p style={{ marginTop: 0, marginBottom: 0 }}>Easy</p>
				<img
					src={arrowIcon}
					style={{ marginTop: -10, marginBottom: -10 }}
					className={hovering === 'easy' ? 'hovering-btn' : ''}
					alt="arrow icon"
				/>
			</Link>
			<Link to="/play/medium" onMouseOver={() => setHovering('medium')} onMouseLeave={() => setHovering('')}>
				<p style={{ marginTop: 0, marginBottom: 0 }}>Medium</p>
				<img
					src={arrowIcon}
					style={{ marginTop: -10, marginBottom: -10 }}
					className={hovering === 'medium' ? 'hovering-btn' : ''}
					alt="arrow icon"
				/>
			</Link>
			<Link to="/play/hard" onMouseOver={() => setHovering('hard')} onMouseLeave={() => setHovering('')}>
				<p style={{ marginTop: 0, marginBottom: 0 }}>Hard</p>
				<img
					src={arrowIcon}
					style={{ marginTop: -10, marginBottom: -10 }}
					className={hovering === 'hard' ? 'hovering-btn' : ''}
					alt="arrow icon"
				/>
			</Link>
		</div>
	);
};

export default Difficulty;
