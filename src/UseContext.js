import React from "react";
import { createContext } from "react";

const UserContext = createContext({
  user: {
    lat:25.2138,
    lng:75.8648,
    loc:"jaipur"
  },
});
export default UserContext;
