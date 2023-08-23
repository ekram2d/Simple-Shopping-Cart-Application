import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Home from '../../HOme/Home/Home/Home';

const Dashboard = () => {
      return (
            <>
                  <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2 " className="drawer-overlay "></label> 
    <ul className="menu p-4 w-80 h-full text-black font-bold  shadow-2xl bg-gray-400">
      {/* Sidebar content here */}
      <li><NavLink to='statistics'><button className='btn shadow-2xl hover:scale-x-90  '>Stastics</button></NavLink> </li>
      <li><NavLink to='/'><button className='btn shadow-2xl hover:scale-x-90  '>Stastics</button></NavLink> </li>
    </ul>
  
  </div>
</div>
            </>
      );
};

export default Dashboard;