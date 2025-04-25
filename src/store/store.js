import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice'; // Importa el authSlice que creaste

const store = configureStore({
  reducer: {
    auth: userReducer, // Añades el reducer de autenticación al store
  },
});

export default store;
