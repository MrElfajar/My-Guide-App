import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  navToggle
} from '../action/index';

const MenuTabBg = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.navToggle);
  return (
    <div className={"menuTabBg " + (show ? 'showMenu': 'hideMenu')} onClick={() => dispatch(navToggle())}></div>
  )
}

export default MenuTabBg;