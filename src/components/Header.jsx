import React from 'react';
import { FaShoppingCart, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = ({ handleLogout, setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const items = useSelector((state)=>state.cart)
  return (
    <header>
      <div className="inputBox_container">
        <FaSearch className="search_icon" />
        <input
          className="inputBox"
          id="inputBox"
          type="text"
          placeholder="Search For Products"
          onChange={handleSearchChange}
        />
      </div>
      <div className="user-actions">
        <Link to={'/cart'} className="cart">
          <FaShoppingCart /> <span className="cart-count">{items.length}</span>
        </Link>
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
