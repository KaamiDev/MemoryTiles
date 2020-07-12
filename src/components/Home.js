import React from 'react';
import { Link } from 'react-router-dom';

import arrowIcon from '../icons/arrow-icon.svg';

const Home = () => {
	return (
		<div className="body-content">
			<div id="home-page">
				<h3>How good is your memory?</h3>
				<Link to="/play">
					Play
					<img src={arrowIcon} alt="arrow icon" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
