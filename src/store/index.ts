import { configureStore } from '@reduxjs/toolkit'

// custom
import appSettingsReducer from './slices/appSettingsSlice'

// Create Redux store
export const store = configureStore({
  reducer: {
    // add here all reducers
    appSettings: appSettingsReducer,
  },
})

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
