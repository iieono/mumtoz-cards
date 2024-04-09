// store.ts
import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsSlice';
import dataReducer from './slices/dataSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    data: dataReducer,
    auth: authReducer,
    // other reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
