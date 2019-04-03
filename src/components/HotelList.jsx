import React, { Component } from 'react';
import { connect } from 'react-redux';

class HotelList extends Component {
	render() {
		const { hotels } = this.props;
		return (
			<div>
				<p>HotelList</p>
				{hotels.map(h => {
					return (
						<>
							<p>{h.name}</p>
							<p>{h.starRating}</p>
							<p>{h.facilities}</p>
						</>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		hotels: state.hotels,
	};
};

export default connect(mapStateToProps)(HotelList);
