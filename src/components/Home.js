import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../icons/arrow-icon.svg';

const Home = () => {
	const [ hovering, setHovering ] = useState(false);

	return (
		<div id="home-page">
			<h3>How good is your memory?</h3>
			<Link to="/play/easy" onMouseOver={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
				<p style={{ marginTop: 0, marginBottom: 0 }}>Play</p>
				<img
					src={arrowIcon}
					style={{ marginTop: -10, marginBottom: -10 }}
					className={hovering ? 'hovering-btn' : ''}
					alt="arrow icon"
				/>
			</Link>
		</div>
	);
};

export default Home;
