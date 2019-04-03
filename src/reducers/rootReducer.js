import { hotels } from '../data/hotels.json';

const rootReducer = (state = {}, action) => {
	state.hotels = hotels;
	return state;
};

export default rootReducer;
