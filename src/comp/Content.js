import React from 'react';
import {
  useSelector
} from 'react-redux';
import HomeContent from './HomeContent';
import Panduan from './Panduan';
import QuranPerkata from './QuranPerkata';
import Tajwid from './Tajwid';
import './css/content.css';


const Content = () => {
  const menuList = useSelector(state => state.menuList);
  return (
    <div className="contentOuter">
        {menuList.map(list => {
      if (list.active === true) {
        switch (list.name) {
          case 'Panduan':
            return <Panduan key={list.id} title={list.name} />
            case 'Tajwid':
              return <Tajwid key={list.id} title={list.name} />
              case 'Al - Quran Perkata':
                return <QuranPerkata key={list.id} title={list.name} />
                default:
                  return <HomeContent key={list.id} title={list.name} />
                }
            }
            return null;
        })}
    </div>
    );
    };

    export default Content;