import React from "react";

class DrumPad extends React.Component{
	constructor(props){
		super(props);
	}

	

	render(){
		//console.log(this.props);
		return(
			<button className = "drum-pad" id={this.props.sound} onClick={() => this.props.handleClick(this.props.keyp,this.props.name)}>
            	{this.props.keyp}
            	<audio className = "clip" src={this.props.sound} id={this.props.keyp} />
        	</button>
		);
	}
}

export default DrumPad;