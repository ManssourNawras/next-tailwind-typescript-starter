'use client';

import { useSelector, useDispatch } from 'react-redux';

// custom
import { RootState } from '@/store';
import { toggleTheme } from '@/store/slices/appSettingsSlice';

export default function ThemeBox() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.appSettings.theme);

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-[theme(colors.primary)] text-[theme(colors.foreground)] max-w-[theme(sizes.content)] mx-auto">
      <h1 className="text-2xl mb-4">Current Theme: {theme}</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 rounded-lg bg-[theme(colors.accent)] text-white hover:opacity-80 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
}