import React from 'react';
import ReactDOM from 'react-dom'

import './index.css'
import Header from './header/Header';
import Menu from './header/Menu';
import {Books} from './books/Books';

ReactDOM.render(
  <>
    <Header/>
    <Menu books = { Books }/>
  </>
  ,document.getElementById('root'));