import React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import './css/menuTab.css';
import {
  navToggle,
  menuAction
} from '../action/index';

const MenuTab = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.navToggle);
  const menuList = useSelector(state => state.menuList);
  return (
    <div className={"menuTab " + (show ? 'showMenu': 'hideMenu')}>
          {menuList.map(list => <div key={list.id} className={ list.active ? 'active': '' } onClick={
      ()=> {
        dispatch(menuAction(list.id))
        dispatch(navToggle());
      }
      }>
      {list.name}
    </div>
    )}
    </div>
  );
}

export default MenuTab;