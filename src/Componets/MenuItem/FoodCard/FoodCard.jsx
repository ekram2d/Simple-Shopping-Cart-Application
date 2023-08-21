import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthoProvider';

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const [quantity, setQuantity] = useState(0);
  const inputRef = useRef(null);
  const { user,   setUser, loading } = useContext(AuthContext);
  console.log(user)
    const { register, handleSubmit, formState: { errors } } = useForm();

  const handleAddToCart = () => {
    // Handle adding the item to the cart with the selected quantity
    console.log(`Adding ${quantity * price} ${name}(s) to the cart`);
    setUser(name)
  };

  const onSubmit = (data, e) => {
      e.preventDefault(); // Prevent form submission
      console.log('Form submitted:', data);
      const newUser = {
        name: data.name,
        email: data.email,
      };
      setUser(newUser);
      setQuantity(parseInt(data.quantity, 10)); // Parse the quantity as an integer
    };
    // console.log(quantity,setUser  )
  return (
    <div className="card w-[90%] bg-base-100 shadow-xl text-white">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='bg-slate-900 text-white absolute right-0 mt-4 mr-4 p-2'>${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card">
          {/* Other card content */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className='text-sm'>
              Enter your Quantity:
              <input
                type="number"
                {...register('quantity', { required: true })}
  required              />
            </label>
            <label className='text-sm'>
              Enter your Name :  
              <input
                type="text"
                {...register('name', { required: true })}
              required/>
            </label>
         
            <label className='text-sm'>
              Enter your Email:
              <input
                type="text"
                {...register('email', { required: true })}
              required/>
            </label>


            {/*
              Display an error message if the quantity field is required
              and the user hasn't entered a value.
            */}
            {/* {errors.quantity && <p className="text-red-500">Quantity is required</p>} */}
            <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">Add to cart</button>
          </form>
        </div>

   {/* \ */}
      </div>
    </div>
  );
};

export default FoodCard;
