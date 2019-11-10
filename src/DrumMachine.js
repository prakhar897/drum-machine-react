import React from "react";
import DrumPads from './DrumPads';
import Display from './Display';

class DrumMachine extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			allbeats :[
				{
					keyp:'Q',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat"
				},
				{
					keyp:'W',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat2"
				},
				{
					keyp:'E',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat3"
				},
				{
					keyp:'A',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat4"
				},
				{
					keyp:'S',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat5"
				},
				{
					keyp:'D',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat6"
				},
				{
					keyp:'Z',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat7"
				},
				{
					keyp:'X',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat8"
				},
				{
					keyp:'C',
					sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
					name: "Kick_n_Hat9"
				}
			],
			currentbeat:''
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);

	}

	componentDidMount(){
		window.addEventListener('keypress', this.handleKeyPress);
	}

    handleKeyPress(e) {
        const pad = this.state.allbeats.find(
            item => item.keyp === e.key.toUpperCase(),
        );
        //console.log(pad.keyp);
        if (pad) document.getElementById(pad.keyp).click();
    }

	handleClick(key,name) {
		document.getElementById(key).play();
		this.setState({
			currentbeat : name
		});
    }

	render(){
		return(
			<div id="drum-machine">
				<DrumPads allbeats = {this.state.allbeats} handleClick={this.handleClick} />
				<Display currentbeat = {this.state.currentbeat} />
			</div>
		);
	}
}

export default DrumMachine;