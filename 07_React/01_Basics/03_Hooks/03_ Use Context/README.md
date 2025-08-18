/**
 * ## React Context Documentation
 *
 * **React Context** is a feature that allows you to share values (such as data, functions, or objects)
 * between components without having to explicitly pass props through every level of the component tree.
 *
 * ### Why We Use React Context
 * - To avoid "prop drilling" (passing props down through many levels).
 * - To share global data such as themes, authentication status, user settings, or language preferences.
 * - To manage state that needs to be accessible by many components at different nesting levels.
 *
 * ### Use Cases for React Context
 * - **Theme management:** Switching between light and dark mode across the app.
 * - **Authentication:** Sharing user login status and user information.
 * - **Localization:** Providing translation strings or locale information.
 * - **Global settings:** Sharing configuration or feature flags.
 *
 * ### When to Use React Context
 * - When multiple components at different levels of the component tree need access to the same data.
 * - When you want to avoid passing props through many intermediate components.
 *
 * ### When Not to Use React Context
 * - For state that is only needed by a few components or is not global.
 * - For high-frequency updates (such as animation state), as context updates can cause unnecessary re-renders.
 *
 * ### Example Usage in README.md
 * ```jsx
 * // theme-context.js
 * import React, { createContext, useContext, useState } from 'react';
 * 
 * const ThemeContext = createContext();
 * 
 * export function ThemeProvider({ children }) {
 *   const [theme, setTheme] = useState('light');
 *   return (
 *     <ThemeContext.Provider value={{ theme, setTheme }}>
 *       {children}
 *     </ThemeContext.Provider>
 *   );
 * }
 * 
 * export function useTheme() {
 *   return useContext(ThemeContext);
 * }
 * 
 * // In your app:
 * import { ThemeProvider, useTheme } from './theme-context';
 * 
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <MyComponent />
 *     </ThemeProvider>
 *   );
 * }
 * 
 * function MyComponent() {
 *   const { theme, setTheme } = useTheme();
 *   return (
 *     <div>
 *       Current theme: {theme}
 *       <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
 *         Toggle Theme
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */