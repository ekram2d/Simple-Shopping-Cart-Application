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
        const response = await axios.get("menu.json"); // Make sure the URL is correct
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
