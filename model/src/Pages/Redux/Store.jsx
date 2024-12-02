import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import logreducer from './LoginSlice'

const persistConfig = {
  key: 'rishiproj',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, logreducer)

export const store = configureStore({
  reducer:{ 
    login:persistedReducer} ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)


