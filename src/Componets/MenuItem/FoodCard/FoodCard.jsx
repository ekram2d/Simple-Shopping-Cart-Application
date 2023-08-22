import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthoProvider';
import { SetUser } from '../../../CustomHooks/SetUser/UserHook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUrl from '../../../CustomHooks/URL/UseUrl';
const FoodCard = ({ item }) => {
  const [url]= useUrl();
  const { name, image, price, recipe, id } = item;
  const [quantity, setQuantity] = useState(0);
  const inputRef = useRef(null);
  const [user, setuser] = useState('');

  // console.log(user)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleAddToCart = () => {
    // Handle adding the item to the cart with the selected quantity
    console.log(`Adding ${quantity * price} ${name}(s) to the cart`);

  };

  const onSubmit = async (data, e) => {
    e.preventDefault(); // Prevent form submission
    console.log(data);
    // console.log('Form submitted:', data);
    const newUser = {
      customer_name: data.name,
      mobile: data.mobile,
      quantity: parseInt(quantity),
      Food_name: name,
      foodImg: image,
      foodPrice: price,
      food_receipe: recipe,
      foodId: id
    };
    setuser(newUser);
    setQuantity(parseInt(data.quantity, 10));// Parse the quantity as an integer
    SetUser(data.name, data.mobile)

    // post method for adding order in database


    const res = await fetch(`${url}/orderItem`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    const responseData = await res.json();
    
    if (responseData?.Inserted > 0) {
      toast.success(responseData.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else{
      toast.error(responseData.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }



    // console.log(newUser);
  };
  // console.log(quantity,user )
  return (
    <div className="card bg-base-100 shadow-xl w-full md:w-[90%]  p-4 rounded-lg ">
    <ToastContainer />
    <figure className="mb-4">
      <img src={image} alt="Shoes" className="w-full rounded-md" />
    </figure>
    <p className="bg-slate-900 text-white e absolute top-0 right-0 p-2">${price}</p>
    <div className="card-body flex flex-col items-center">
      <h2 className="card-title text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{recipe}</p>
  
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <label className="text-sm">
            Enter your Quantity:
            <input
              className="border bg-slate-100 py-1 px-4 rounded-md"
              type="number"
              {...register('quantity', { required: true })}
              required
            />
          </label>
          <label className="text-sm">
            Enter your Name:
            <input
              className="border bg-slate-100 py-1 px-4 rounded-md"
              type="text"
              {...register('name', { required: true })}
              required
            />
          </label>
          <label className="text-sm">
            Enter your Mobile:
            <input
              className="border bg-slate-100 py-1 px-4 rounded-md"
              type="text"
              {...register('mobile', { required: true })}
              required
            />
          </label>
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400 py-2 rounded-md hover:bg-slate-200 transition-colors"
          >
            Add to cart
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default FoodCard;
