import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Aquí almacenamos los datos del usuario, puede ser null si no hay sesión
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Guardamos la información del usuario
    },
    logout: (state) => {
      state.user = null; // Limpiamos la información del usuario al cerrar sesión
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
