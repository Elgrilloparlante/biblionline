import React from 'react';
import './header.css';

const AdvancedSearch = (props) => {
    return (
        <div className = 'advanced'>
            <input id = {props.id} type="text" placeholder="Buscar..." name="search" />
            <button><i className="fa fa-search"></i></button>
        </div>
    );
  }
export default AdvancedSearch;