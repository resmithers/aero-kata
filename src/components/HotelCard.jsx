import React from 'react';
import { Card } from 'react-bootstrap';

export default ({ data: { name, starRating, facilities } }) => (
	<Card>
		<Card.Header>{name}</Card.Header>
		<Card.Body>({starRating})</Card.Body>
		<Card.Body>
			{facilities.length > 0 && facilities.map(fac => <p key={fac}>{fac}</p>)}
			{facilities.length === 0 && <p>No facilities</p>}
		</Card.Body>
	</Card>
);
