import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../icons/arrow-icon.svg';

const Home = () => {
	const [ hovering, setHovering ] = useState(false);

	return (
		<div id="home-page">
			<h3>How good is your memory?</h3>
			<Link to="/play" onMouseOver={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
				Play
				<img src={arrowIcon} className={hovering ? 'hovering-btn' : ''} alt="arrow icon" />
			</Link>
		</div>
	);
};

export default Home;
