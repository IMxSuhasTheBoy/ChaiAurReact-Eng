import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

// 3 - Wrap the components (children) that need access to the context in the provider. (UserContextProvider)
function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
