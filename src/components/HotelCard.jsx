import React from 'react';
import { Card } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

export default ({ data: { name, starRating, facilities } }) => (
	<Card style={{ height: '20rem', overflowY: 'scroll', marginTop: '10px' }}>
		<Card.Header>{name}</Card.Header>
		<Card.Body>
			<StarRatings
				rating={starRating}
				starRatedColor="red"
				numberOfStars={5}
				name="rating"
				starDimension="20px"
				starSpacing="10px"
			/>
			<p>({starRating})</p>
		</Card.Body>
		{facilities.length > 0 && facilities.map(fac => <p key={fac}>{fac}</p>)}
		{facilities.length === 0 && <p>No facilities</p>}
	</Card>
);
