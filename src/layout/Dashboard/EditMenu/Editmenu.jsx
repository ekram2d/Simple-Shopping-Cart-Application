import React from 'react';
import { useParams } from 'react-router-dom';
import { MenuData } from '../../../CustomHooks/MenuData/MenuData';

const Editmenu = () => {
  const { id } = useParams();
  const { menu } = MenuData();

  // Filter menu data by ID
  const menuItem = menu.find(item => item.id === parseInt(id, 10));

  console.log(menuItem);

  return (
    <div>
      {/* Render your edit form or content here */}
      <h2>Edit Menu Item: {menuItem ? menuItem.name : 'Not Found'}</h2>
      {/* You can render the details of the menu item here */}
    </div>
  );
};

export default Editmenu;
