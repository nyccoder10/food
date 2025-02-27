import React, { useState ,useContext} from "react";
import axios from "axios";
import UserContext from "./UseContext";
import { LuAtom } from "react-icons/lu";
const YourComponent = () => {
  const [locationName, setLocationName] = useState("");
  const {user,setUser}=useContext(UserContext);

  const getLocationName = async () => {
    const apiKey = "74b1205264364d2eba327a004b12efe8"; // Replace with your API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${user.user.lat}+${user.user.lng}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      console.log(response);
      if (response.data.results.length > 0) {
        const location = response.data.results[0].formatted;
        setUser(prevState => ({
            ...prevState, // Keep the other properties of the user object
            user: {
                ...prevState.user, // Keep other properties of the nested user object
                loc: location, // Update only the loc property
            }
        }));
        console.log(user);
        setLocationName(location);
      } else {
        setLocationName("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocationName("Error fetching location");
    }
  };

  return (
    <div>
      <h3>Location Name: {locationName}</h3>
      <button onClick={() => getLocationName()}>
        Get Location Name
      </button>
    </div>
  );
};

export default YourComponent;
