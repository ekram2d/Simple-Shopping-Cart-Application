import React, { useState } from 'react';

const AddEmploy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
  });

  const jobRoles = ['Waiter', 'Cook', 'Server', 'Bartender'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g. make a POST request to your API
    console.log(formData);
  };

  return (
    <div className="flex w-full justify-center items-center  m-3 mx-auto p-4">
      <div className="w-full font-bold   p-6 rounded shadow-2xl bg-gray-800 ">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Add Employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 bg-white focus:ring focus:ring-blue-300 px-3 py-2 rounded"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Job Role</label>
            <select
              name="role"
              className="w-full border border-gray-300 bg-white text-black focus:ring focus:ring-blue-300 px-3 py-2 rounded"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Job Role</option>
              {jobRoles.map((role, index) => (
                <option key={index} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:ring focus:ring-blue-300">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmploy;
