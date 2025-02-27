import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./Restaurentcard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import UserContext from "./UseContext";
import FoodCarousel from "./FoodCar";
import { MdLocationOn } from "react-icons/md";
import rest from "./assets/rest.jpg";
import bgimg from "./assets/bgimg.jpeg";
import axios from "axios";

const Body = () => {
  const [Allrest, setAllrest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [Filterrest, setFilterrest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [locationName, setLocationName] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
    getLocationName();
  }, [user.user.lat, user.user.lng, user.user.loc]);

  async function getRestaurants() {
    console.log(user.user);
    setLoading(true);
    try {
      const response = await fetch(
        `https://foodfire.onrender.com/api/restaurants?lat=${user.user.lat}&lng=${user.user.lng}&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await response.json();
      setLoading(false);

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;
          if (Array.isArray(checkData)) {
            return checkData;
          }
        }
        return [];
      }

      const resData = await checkJsonData(json);
      console.log(resData);
      setAllrest(resData);
      setFilterrest(resData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const getLocationName = async () => {
    const apiKey = "74b1205264364d2eba327a004b12efe8"; // Replace with your API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${user.user.lat}+${user.user.lng}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      console.log(response);
      if (response.data.results.length > 0) {
        const location = response.data.results[0].formatted;
        setUser((prevState) => ({
          ...prevState, // Keep the other properties of the user object
          user: {
            ...prevState.user, // Keep other properties of the nested user object
            loc: location, // Update only the loc property
          },
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

  function searchData(searchText, Allrest) {
    const resFilterData = Allrest.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterrest(resFilterData);
  }

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    searchData(searchText, Allrest);
  };

  return (
    <div className="min-w-full min-h-screen bg-cover bg-center">
      <div>
        {loading ? (
          <Shimmer />
        ) : Allrest.length === 0 ? (
          <div className="flex flex-col justify-center items-center mt-10 space-y-4">
            <MdLocationOn className="text-6xl text-purple-500 animate-bounce" />
            <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
              No restaurant found at your location!
            </p>
            <p className="text-lg text-gray-500">
              Try searching in a different location or check back later.
            </p>
          </div>
        ) : (
          <>
           

            <FoodCarousel />
            
            <div className="flex justify-center items-center mt-6 pt-6 md:mt-0 space-x-3">
              <div className="relative">
                <input
                  type="text"
                  className="search-input bg-white border rounded-l-lg px-4 py-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Search a restaurant you want..."
                  value={searchText}
                  onChange={handleSearchChange}
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.92 12.88a8 8 0 111.41-1.42l3.94 3.95a1 1 0 01-1.42 1.41l-3.95-3.94zM2 8a6 6 0 1112 0A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <button
                className="bg-purple-500 text-white py-2 px-6 rounded-r-lg hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring focus:border-purple-300"
                onClick={() => searchData(searchText, Allrest)}
              >
                Search
              </button>
            </div>
            <div className="mt-8 max-w-[80vw] mx-auto">
  <h2 className="text-2xl font-semibold text-center">
    Top Restaurants in {user.user.loc}
  </h2>
  <div className="flex justify-center">
    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"></div>
  </div>
</div>


            <div className="flex flex-wrap justify-center items-center mt-10 ">
              {Filterrest.map((restaurant) => (
                <div
                  className=" xl:w-[20vw]  px-2 mb-4"
                  key={restaurant?.info?.id}
                >
                  <Link to={"/restaurant/" + restaurant?.info?.id}>
                    <RestaurantCard {...restaurant?.info} />
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
