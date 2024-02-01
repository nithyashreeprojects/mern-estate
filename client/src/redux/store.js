import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';  // Import the userReducer, assuming it's named 'reducer'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,  // Use the correct reducer for the 'user' slice
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Restify doesn't support serialization
    }),
});

export const persistor = persistStore(store);
