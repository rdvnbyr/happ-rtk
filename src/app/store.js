/* eslint-disable no-undef */
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import authReducer from '../auth/core/slice';
import {authApi} from '../auth/core/api';

const persistConfig = {
  key: 'happ-rtk-root',
  storage,
  whitelist: ['auth'],
  blacklist: [authApi.reducerPath],
};

// combine reducers into root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  // Generated reducer for RTK-Query API
  [authApi.reducerPath]: authApi.reducer,
});

// create persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// make array of middlewares to be used
//* thunk middleware is already included in configureStore by default, so no need to add it here
const middlewares = [authApi.middleware];

// configure store with middlewares
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

// create persistor from store
const persistor = persistStore(store);

// Than finally export store and persistor
export {store, persistor};
