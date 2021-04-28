import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  navToggle
} from '../action/index';
import './css/navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.navToggle);

  return (
    <nav className="navigation">
        <div className="logo">
Logo
    </div>
        <div className="menu" onClick={()=>dispatch(navToggle(show))}>
Menu
    </div>
    </nav>
  );
};

export default Navigation;