import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class IntervalSwitcher extends Component {
	render() {
		return (
			<div className="RandomManager">
				<label>Current Refresh Interval: </label><TextField id="TimeInterval" defaultValue={this.props.interval_seconds} onChange={this.props.changeInterval}/>
				<br/>
				<RaisedButton label="Change Update Interval" onClick={this.props.pushButton}/>
			</div>
		);
	}
}

export default IntervalSwitcher;
