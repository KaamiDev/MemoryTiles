import React from 'react';
import { Link } from 'react-router-dom';

import cubeIcon from '../icons/cube-icon.svg';

const Header = () => {
	return (
		<div id="header">
			<Link to="/">
				<img src={cubeIcon} alt="cube icon" />
				<h1>
					Memory<span>Tiles</span>
				</h1>
			</Link>
		</div>
	);
};

export default Header;
