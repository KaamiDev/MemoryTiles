import React from 'react';

import cubeIcon from '../icons/cube-icon.svg';

const Header = () => {
	return (
		<div id="header">
			<img src={cubeIcon} alt="cube icon" />
			<h1>
				Memory<span>Tiles</span>
			</h1>
		</div>
	);
};

export default Header;
