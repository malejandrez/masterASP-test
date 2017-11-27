import React, { Component } from 'react';
import IntervalSwitcher from './IntervalSwitcher.js';

class RandomManager extends Component {
	
	constructor() {
        super();
        this.state = { random : undefined,
					   interval_seconds : 10,
					   temp_interval : 10
		};
		this.changeInterval = this.changeInterval.bind(this);
		this.updateInterval = this.updateInterval.bind(this);
		this.refresh = this.refresh.bind(this);
    }
	updateRandom(){
		fetch(this.props.service_url).then(result => result.json())
		.then(response => {
			var newState = this.state;
			newState.random = response.random;
			this.setState(newState);
		})
	}
	updateInterval(event){
		var newState = this.state;
		newState.interval_seconds = this.state.temp_interval;
		clearTimeout(this.state.currentTimeout);
		const currentTimeout = setTimeout(this.refresh,this.state.interval_seconds * 1000);
		newState.currentTimeout = currentTimeout;
		this.setState(newState);
	}
	changeInterval(event, newValue){
		var newState = this.state;
		newState.temp_interval = newValue;
		this.setState(newState);
	}
	refresh(){
		const currentTimeout = setTimeout(this.refresh,this.state.interval_seconds * 1000);
		var newState = this.state;
		newState.currentTimeout = currentTimeout;
		this.setState(newState);
		this.updateRandom();
	}
	componentDidMount(){
		this.refresh();
	}
	render() {
		return (
			<div className="RandomManager">
				<IntervalSwitcher interval_seconds={this.state.interval_seconds} changeInterval={this.changeInterval} pushButton={this.updateInterval}/>
				<p id="RandomNumber"><label>Random Number:  </label>{this.state.random}</p>
			</div>
		);
	}
}

export default RandomManager;
