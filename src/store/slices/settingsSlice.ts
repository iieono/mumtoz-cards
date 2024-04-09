import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  theme: string;
  language: string;
  sidebar: boolean; // Corrected boolean type
  // Add other settings...
}

const initialState: SettingsState = {
  theme: 'light',
  language: 'en',
  sidebar: false,
  // other settings...
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { toggleSidebar } = settingsSlice.actions;
export default settingsSlice.reducer;
