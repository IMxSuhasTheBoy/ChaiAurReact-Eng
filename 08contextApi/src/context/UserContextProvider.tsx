import { useState } from "react";
import UserContext from "./UserContext";

// 2 - This component manages the state and provides it to all child components.
const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{
    username: string;
    password: string;
  } | null>(null);

  return (
    // passing the state and setter fn as the context value.
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

// Centralized State: It serves as a central location for user-related state in the application.

// Components can access user data without passing props through multiple levels.

// Easy to manage and update: Changes in user data can be handled in one place, making it easier to manage and update. Any component can update the user state, and all consumers will re-render automatically.

// Separation of Concerns: It isolates user state management from individual components
