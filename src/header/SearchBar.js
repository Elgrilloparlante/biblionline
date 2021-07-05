import React from 'react';
import './header.css';

const SearchBar = (props) => {
    return (
        <div className = 'form'>
            <input id = {props.id} type="text" placeholder="Buscar..." name="search" />
            <button><i className="fa fa-search"></i></button>
        </div>
    );
  }
export default SearchBar;