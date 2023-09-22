import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quntity: cartItem.quntity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quntity: 1 }];
};

export const removeCartItems = (cartItems, productToRemove) => {
  const existingCartItems = cartItems.find((cartItem) => {
    return cartItem.id === productToRemove.id;
  });

  if (existingCartItems.quntity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quntity: cartItem.quntity - 1 }
      : cartItem
  );
};

export const clearCartItems = (cartItems, clearCartItems) => {
  return cartItems.filter((cartItem) => cartItem.id !== clearCartItems.id);
};

export const CartContex = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFormCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quntity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quntity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFormCart = (productToRemove) => {
    setCartItems(removeCartItems(cartItems, productToRemove));
  };

  const clearItemFormCart = (productToClear) => {
    setCartItems(clearCartItems(cartItems, productToClear));
  };

  const values = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFormCart,
    clearItemFormCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContex.Provider value={values}>{children}</CartContex.Provider>;
};
