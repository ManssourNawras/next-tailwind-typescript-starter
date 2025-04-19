import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// custom
import { AppSettings } from "@/models/AppSettings";


const initialState: AppSettings = {
  theme: 'light',
  notificationsEnabled: true,
}

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {

    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('appSettings', JSON.stringify(state))
    },
    toggleNotifications: (state) => {
      state.notificationsEnabled = !state.notificationsEnabled
      localStorage.setItem('appSettings', JSON.stringify(state))
    },

    setAppSettings: (state, action: PayloadAction<AppSettings>) => {
      state.theme = action.payload.theme
      state.notificationsEnabled = action.payload.notificationsEnabled
      localStorage.setItem('appSettings', JSON.stringify(action.payload))
    },

    resetAppSettings: (state) => {
      state.theme = 'light'
      state.notificationsEnabled = true
      localStorage.setItem('appSettings', JSON.stringify(state))
    },
  },
})

export const {
  setAppSettings,
  toggleTheme,
  toggleNotifications,
  resetAppSettings,
} = appSettingsSlice.actions
export default appSettingsSlice.reducer