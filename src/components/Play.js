import React, { useState } from 'react';

import Square from './Square';

const Play = () => {
	const [ starting, setStarting ] = useState(true);

	const squares = Array.from(Array(48).keys()).map((index) => {
		return <Square number={index} />;
	});

	return (
		<div id="play-page">
			<h3 className={`play-caption ${starting ? 'play-caption-ani' : ''}`}>Watch carefully for the pattern.</h3>
			<h6 className="level-small" id={starting ? 'level-big' : ''}>
				Level - 01
			</h6>
			<div className={`square-container ${starting ? 'square-container-ani' : ''}`}>{squares}</div>
		</div>
	);
};

export default Play;
