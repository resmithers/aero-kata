import React from 'react';
import { Card } from 'react-bootstrap';

export default ({ data: { name, starRating, facilities } }) => (
	<Card style={{ height: '20rem', overflowY: 'scroll', marginTop: '10px' }}>
		<Card.Header>{name}</Card.Header>
		<Card.Body>({starRating})</Card.Body>
			{facilities.length > 0 && facilities.map(fac => <p key={fac}>{fac}</p>)}
			{facilities.length === 0 && <p>No facilities</p>}
	</Card>
);
