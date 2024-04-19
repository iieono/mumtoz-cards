import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  theme: boolean;
  language: string;
  sidebar: boolean;
  // Add other settings...
}

const initialState: SettingsState = {
  theme: false,
  language: 'en',
  sidebar: false,
  // other settings...
};

const loadSettings = (): SettingsState => {
  const settingsStr = localStorage.getItem('settings');
  if (settingsStr) {
    return JSON.parse(settingsStr);
  }
  return initialState;
};

const saveSettings = (settings: SettingsState) => {
  localStorage.setItem('settings', JSON.stringify(settings));
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: loadSettings(),
  reducers: {
    toggleSidebar(state) {
      state.sidebar = !state.sidebar;
      saveSettings(state);
    },
    toggleTheme(state) {
      state.theme = !state.theme;
      saveSettings(state);
    },
  },
});

export const { toggleSidebar, toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
