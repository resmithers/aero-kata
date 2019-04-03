import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Row, Col } from 'react-bootstrap';
import HotelCard from './HotelCard';
import Filters from './Filter';
import { containsAll } from '../utils';

class HotelList extends Component {
	state = {
		hotels: null,
		order: null,
		filters: null,
	};

	componentDidUpdate({ hotels: h }, { order: o, filters: f }) {
		const { hotels } = this.props;
		const { order, filters } = this.state;

		if (order !== o || filters !== f) {
			const newHotels = hotels
				.sort((a, b) => {
					if (order === 'asc') return a.starRating - b.starRating;
					if (order === 'desc') return b.starRating - a.starRating;
					return 0;
				})
				.filter(({ facilities }) => containsAll(filters, facilities));
			this.setState({ hotels: newHotels });
		}
	}

	applyOrder = order => {
		this.setState({ order });
	};

	applyFilter = filters => {
		this.setState({ filters });
	};

	render() {
		const hotels = this.state.hotels || this.props.hotels;
		return (
			<>
				<Filters applyOrder={this.applyOrder} applyFilter={this.applyFilter} />
				<ListGroup variant="flush">
					<Row>
						{hotels.map(data => (
							<Col sm={4} key={data.name}>
								<HotelCard data={data} />
							</Col>
						))}
					</Row>
				</ListGroup>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		hotels: state.hotels,
	};
};

export default connect(mapStateToProps)(HotelList);
