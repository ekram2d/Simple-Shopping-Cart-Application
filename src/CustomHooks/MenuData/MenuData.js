import { useState, useEffect } from "react";
import axios from "axios";

export const MenuData = () => {
  const [menu, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  //console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restaurent-backend-alam2025.vercel.app/menu?fbclid=IwAR0jFt-FndExqYaZXcYTC9Wuiscc5qYUhKhyJDDcG19njWIuQI9Sg4bF1VQ"); // Make sure the URL is correct
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // The dependency array should be empty to fetch data only once

  return { menu, isLoading, error };
};
