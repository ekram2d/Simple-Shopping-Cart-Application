
import React from 'react';
import { MenuData } from '../../../CustomHooks/MenuData/MenuData';
import MenuItem from '../../../Componets/MenuItem/MenuItem';

const Home = () => {
      const { data, isLoading, error } = MenuData();
      
      return (
            <div>
                  
                  <MenuItem></MenuItem>
            </div>
      );
};

export default Home;