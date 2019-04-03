import React, { Component } from 'react';
import './App.css';
import HotelList from './components/HotelList';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>HotelAdvisor</h1>
				<HotelList />
			</div>
		);
	}
}

export default App;
