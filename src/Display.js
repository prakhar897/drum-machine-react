import React from "react";

class Display extends React.Component{

	render(){
		return(
			<div id="display">
				<h1>{this.props.currentbeat}</h1>
			</div>
		);
	}
}

export default Display;