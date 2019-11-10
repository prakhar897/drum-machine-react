import React from "react";
import DrumPad from './DrumPad';

const DrumPads = (props) => {
	//console.log(props);
	//const pads = props.allbeats.map(item => <DrumPad song=item.song key=item.key name=item.name />);
	return(
		<div>
			{props.allbeats.map(item => <DrumPad sound={item.sound} keyp={item.keyp} name={item.name} handleClick={props.handleClick} />)}
		</div>
	);
}

export default DrumPads;