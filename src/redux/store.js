import { configureStore } from '@reduxjs/toolkit';
import costumerReducer from './costumerSlice';

export default configureStore({
	reducer: {
		costumers: costumerReducer,
	},
});
