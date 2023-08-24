// use local storage to manage cart data
const addToDb = (id, OrderItem) => {
    
      let shoppingCart = getShoppingCart();
    
      if (!Array.isArray(shoppingCart)) {
        shoppingCart = []; // Initialize an empty array if it's not an array
      }
    
      // Create a new array with the new OrderItem added
      const updatedCart = [...shoppingCart, OrderItem];
    
      localStorage.setItem('shopping-cart', JSON.stringify(updatedCart));
    };
    
  
  const removeFromDb = id => {
      const shoppingCart = getShoppingCart();
      if (id in shoppingCart) {
          delete shoppingCart[id];
          localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
      }
  }
  
  const getShoppingCart = () => {
      let shoppingCart = {};
  
      //get the shopping cart from local storage
      const storedCart = localStorage.getItem('shopping-cart');
      if (storedCart) {
          shoppingCart = JSON.parse(storedCart);
      }
      return shoppingCart;
  }
  
  const deleteShoppingCart = () => {
      localStorage.removeItem('shopping-cart');
  }
  
  export {
      addToDb,
      removeFromDb,
      getShoppingCart,
      deleteShoppingCart
  }