import React from 'react';

import Square from './Square';

const Play = () => {
	const squares = Array.from(Array(48).keys()).map(() => {
		return <Square />;
	});

	return (
		<div id="play-page">
			<h3>Watch carefully for the pattern.</h3>
			<h6>Level - 01</h6>
			<div className="square-container">{squares}</div>
		</div>
	);
};

export default Play;
