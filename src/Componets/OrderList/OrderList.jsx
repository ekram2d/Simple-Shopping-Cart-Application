import React from 'react';
import { OrderData } from '../../CustomHooks/OrderData/OrderData';

const OrderList = () => {
      const { order, isLoading, error, groupedOrders } = OrderData();

      if (isLoading) {
            return <div>Loading...</div>;
      }

      if (error) {
            return <div>Error: {error.message}</div>;
      }

      return (
            <div className="p-6">
                  {Object.keys(groupedOrders).map((mobile, index) => {
                        const customerName = groupedOrders[mobile][0].customer_name;

                        return (
                              <div key={index} className="mb-6">
                                    <h2 className="text-xl font-semibold mb-2">Mobile Number: {mobile}</h2>
                                    <h3 className="text-lg font-semibold mb-2">Customer: {customerName}</h3>
                                    <table className="w-full border border-gray-300">
                                          <thead>
                                                <tr className="bg-gray-100">
                                                      <th className="border px-4 py-2">Food Name</th>
                                                      <th className="border px-4 py-2">Food Price</th>
                                                      <th className="border px-4 py-2">Quantity</th>
                                                      <th className="border px-4 py-2">Total Price (Per Food)</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {groupedOrders[mobile].map((orderItem, subIndex) => (
                                                      <tr key={subIndex}>
                                                            <td className="border px-4 py-2">{orderItem.Food_name}</td>
                                                            <td className="border px-4 py-2">{orderItem.foodPrice}</td>
                                                            <td className="border px-4 py-2">{orderItem.quantity}</td>
                                                            <td className="border px-4 py-2">{orderItem.foodPrice * orderItem.quantity}</td>
                                                      </tr>
                                                ))}
                                                <tr>
                                                      <td className="border px-4 py-2 font-semibold">Total</td>
                                                      <td className="border px-4 py-2"></td>
                                                      <td className="border px-4 py-2"></td>
                                                      <td className="border px-4 py-2 font-semibold">
                                                            {groupedOrders[mobile].reduce((total, item) => total + item.foodPrice * item.quantity, 0)}
                                                      </td>
                                                </tr>
                                          </tbody>
                                    </table>
                                    <br />
                              </div>
                        );
                  })}
            </div>
      );
};

export default OrderList;
