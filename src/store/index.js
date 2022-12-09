import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        authentication: authSlice,
    }
});

export default store;
