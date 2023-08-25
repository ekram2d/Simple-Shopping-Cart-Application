import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MenuData } from '../../../CustomHooks/MenuData/MenuData';

const Editmenu = () => {
  const { id } = useParams();
  const { menu } = MenuData();

  // Filter menu data by ID
  const menuItem = menu.find(item => item.id === parseInt(id, 10));

  const { register, handleSubmit } = useForm({ defaultValues: menuItem });

  const onSubmit = (data) => {
    // Handle the form submission, you can update the menu item with the edited data
    console.log(data);
  };

  return (
    <div className="w-full flex justify-center items-center bg-gray-100 h-screen">
      <div className="w-full bg-white p-6 rounded shadow-md max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Menu Item: {menuItem ? menuItem.name : 'Not Found'}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block font-semibold">Name</label>
          <input type="text" className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('name')} />

          <label className="block font-semibold">Image URL</label>
          <input type="text" className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('image')} />

          <label className="block font-semibold">Price</label>
          <input type="number" step="0.01" className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('price')} />

          <label className="block font-semibold">Recipe</label>
          <textarea className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('recipe')} />

          <label className="block font-semibold">ID</label>
          <input type="text" className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('id')} />

          <label className="block font-semibold">Category</label>
          <input type="text" className="w-full bg-white border border-gray-300 px-3 py-2 rounded text-black" {...register('category')} />

          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Editmenu;
