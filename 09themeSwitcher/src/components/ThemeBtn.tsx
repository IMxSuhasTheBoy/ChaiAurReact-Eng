import useTheme from "../contexts/theme";
// The component encapsulates the logic for toggling between light and dark themes, providing a reusable UI element that interacts with the broader theme context of the application.

function ThemeBtn() {
  // 8 - Context values and functions are extracted from object returned by custom hook.
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // 9 - Function to handle the theme change.
  const onChangeBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const darkModeStatus = e.currentTarget.checked; // checks the current state of the checkbox. becomes true when the checkbox is checked and false when it is unchecked.
    // console.log("darkModeStatus !!", darkModeStatus);

    // fn calls conditional on the checkbox state.
    if (darkModeStatus) {
      darkTheme(); //  set the theme to dark.
    } else {
      lightTheme(); //  set the theme to light.
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"} //The checked prop evaluates to false when themeMode is "light" and true when themeMode is "dark".
      />
      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}

export default ThemeBtn;

// This flow showcases how React's declarative style, combined with context for state management, allows for dynamic UI updates in response to user actions, all orchestrated through JavaScript's event handling and functional programming capabilities.
