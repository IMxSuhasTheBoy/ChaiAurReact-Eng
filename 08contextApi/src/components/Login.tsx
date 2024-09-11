import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

// 4 - Consume the context in the component that needs it. (Login)
// Login component uses setUser from context to update user data on form submission.
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;

// 1. onSubmit, it calls handleSubmit, which in turn calls setUser with the new user data.
// 2. setUser updates the user state in the UserContext global state for all components.
// 3. The component re-renders with the new user data, displaying the updated username.
/**
 * Login Component
 * 
 * This component provides a login form for user authentication.
 * It uses React's useState for local state management and useContext
 * to interact with the global UserContext.
 * 
 * @component
 * @example
 * return (
 *   <Login />
 * )
 * 
 * @uses {React.useState} For managing local state (username and password)
 * @uses {React.useContext} For accessing and updating the global user state
 * @uses {UserContext} For accessing the setUser function to update global state
 * 
 * State:
 * - username (string): Stores the current value of the username input
 * - password (string): Stores the current value of the password input
 * 
 * Context:
 * - setUser (function): Function from UserContext to update the global user state
 * 
 * Functions:
 * - handleSubmit: Handles form submission, prevents default behavior,
 *                 and updates the global user state with entered credentials
 * 
 * Renders:
 * - A form with username and password inputs, and a submit button
 */
