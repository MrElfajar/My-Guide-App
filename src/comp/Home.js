import React from 'react';

import Navigation from './Navigation';
import MenuTab from './MenuTab';
import Content from './Content';
import MenuTabBg from './MenuTabBg';
import SurahPerkata from './SurahPerkata';
import PanduanPop from './PanduanPop';

import './css/home.css';

const Home = () => {
  return(
    <div className="container">
    <Navigation />
    <Content />
    <MenuTab />
    <MenuTabBg />
    <SurahPerkata />
    <PanduanPop />
    </div>
  );
};

export default Home;