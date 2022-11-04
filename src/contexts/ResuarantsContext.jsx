import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RestaurantContext = createContext(null);

export const RestrauntProvider = ({ children }) => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const res = await axios.get(
          "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?view=Grid%20view",
          {
            headers: {
              Authorization: "Bearer keyfXgn8PL6pB3x32",
            },
          }
        );
        setRestaurants(res.data.records);
        setFilteredRestaurants(res.data.records);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    }

    fetchRestaurants();
  }, []);

  const resetFiltered = () => {
    setFilteredRestaurants(restaurants);
  };

  const handleFilter = async (searchWord) => {
    if (!searchWord) {
      return setFilteredRestaurants(restaurants);
    }

    setFilteredRestaurants(
      restaurants.filter((r) =>
        r.fields.Name.toLowerCase().includes(searchWord)
      )
    );
  };

  return (
    <RestaurantContext.Provider
      value={{ filteredRestaurants, handleFilter, resetFiltered }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
