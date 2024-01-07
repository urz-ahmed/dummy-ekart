import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../redux/CartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div>
      <h3 className='cartHeader'>Cart Page</h3>
      <div className='cartWrapper'>
        {cartItems.map((item) => (
          <div className='cartCards' key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h5>{item.title}</h5>
            <h5>$ {item.price}</h5>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className='totalAmount'>Total Amount: ${calculateTotalAmount().toFixed(2)}</div>
      <button onClick={goToHomePage}>Go to Home</button>
    </div>
  );
};

export default Cart;
