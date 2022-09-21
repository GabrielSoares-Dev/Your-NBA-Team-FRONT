import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import combinedReducers from './modules/combinedReducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, combinedReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: {
        ignoredPaths: ['config'],
      },
    }),
});

const persistor = persistStore(store);

export type CustomState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
