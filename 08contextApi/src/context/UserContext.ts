import { createContext } from "react";

// 1 - create the context with TypeScript types. It defines the shape of the user data and the context.
interface User {
  username: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
