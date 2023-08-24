import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import useUrl from '../URL/UseUrl';

export const OrderData = () => {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
   const[url]=useUrl();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/orders`);
        setOrder(response.data);
        console.log(response.data)
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  // const groupedOrders = {};
  // order.forEach(item => {
  //   if (!groupedOrders[item.mobile]) {
  //     groupedOrders[item.mobile] = [];
  //   }
  //   groupedOrders[item.mobile].push(item);
  // });
  // console.log(groupedOrders)

  // Return the fetched data, loading state, and error state as an object
  return { order, isLoading, error };
};
