import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Row, Col } from 'react-bootstrap';
import HotelCard from './HotelCard';

class HotelList extends Component {
	render() {
		const { hotels } = this.props;
		return (
			<div>
				<p>HotelList</p>
				<ListGroup variant="flush">
					<Row>
						{hotels.map(data => (
							<Col sm={4} key={data.name}>
								<HotelCard data={data}/>
							</Col>
						))}
					</Row>
				</ListGroup>
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
