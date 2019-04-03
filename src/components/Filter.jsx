import React from 'react';
import { connect } from 'react-redux';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function Filters({ facilities, applyFilter, applyOrder }) {
	return (
		<>
			<ToggleButtonGroup name="filters" type="checkbox" onChange={applyFilter}>
				{facilities.map(facility => (
					<ToggleButton
						variant="outline-primary"
						key={facility}
						value={facility}>
						{facility}
					</ToggleButton>
				))}
			</ToggleButtonGroup>

			<ToggleButtonGroup name="order" type="radio" onChange={applyOrder}>
				<ToggleButton variant="outline-primary" value="desc">desc</ToggleButton>
				<ToggleButton variant="outline-primary" value="asc">asc</ToggleButton>
			</ToggleButtonGroup>
		</>
	);
}

const mapStateToProps = state => {
	const out = new Set();
	state.hotels.map(({ facilities }) => facilities.map(f => out.add(f)));

	return {
		facilities: [...out],
	};
};

export default connect(mapStateToProps)(Filters);