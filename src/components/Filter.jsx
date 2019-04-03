import React from 'react';
import {
	ToggleButtonGroup,
	ToggleButton
} from 'react-bootstrap';

export default function Filters({ applyOrder }) {
	return (
		<>
			<ToggleButtonGroup name="order" type="radio" onChange={applyOrder}>
				<ToggleButton value="desc">desc</ToggleButton>
				<ToggleButton value="asc">asc</ToggleButton>
			</ToggleButtonGroup>
		</>
	);
}
