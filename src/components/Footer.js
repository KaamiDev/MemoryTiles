import React from 'react';

import heartIcon from '../icons/heart-icon.svg';

const Footer = () => {
	return (
		<div id="footer">
			<h3>
				Made with <img src={heartIcon} alt="heart icon" /> by <span>Kaami</span>
			</h3>
		</div>
	);
};

export default Footer;
