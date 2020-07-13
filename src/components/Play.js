import React from 'react';

import Square from './Square';

const Play = () => {
	const squares = Array.from(Array(48).keys()).map((index) => {
		return <Square number={index} />;
	});

	return (
		<div id="play-page">
			<h3 className="play-caption">Watch carefully for the pattern.</h3>
			<h6 className="level-small" id={'level-big'}>
				Level - 01
			</h6>
			<div className="square-container">{squares}</div>
		</div>
	);
};

export default Play;
