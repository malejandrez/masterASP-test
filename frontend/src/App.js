import React, { Component } from 'react';
import './App.css';
import RandomManager from './RandomManager.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var SERVICE_URL = "http://localhost:3000/api/random"

class App extends Component {
	render() {
		return (
			<div className="App">
				<MuiThemeProvider>
					<RandomManager service_url={SERVICE_URL}/>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;
