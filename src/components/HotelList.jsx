import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Row, Col } from 'react-bootstrap';
import HotelCard from './HotelCard';
import Filters from './Filter';

class HotelList extends Component {
	state = {
		hotels: null,
		order: null,
    };
    
    componentDidUpdate({hotels: h}, {order: o}) {
        const { hotels } = this.props;
        const { order } = this.state;

        if (order !== o) {
            const sortHotels = hotels.sort((a, b) => {
                if (order === 'asc') return a.starRating - b.starRating;
                if (order === 'desc') return b.starRating - a.starRating;
                return 0;
            })
            this.setState({ hotels: sortHotels })
        }
    }

	applyOrder = order => {
        console.log('HI')
		this.setState({ order });
	};

	render() {
		const { hotels } = this.props;
		return (
			<>
				<Filters applyOrder={this.applyOrder}/>
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
