import React from 'react';
import Card from './Card';
import './css/tajwid.css';


const Menu3 = ({title}) => {
  return (
      <div className="content pop">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="tajwidContent">
          <Card hukum="ikhfa" title="Ikhfa"/>
          <Card hukum="ikhfaSyafawi" title="Ikhfa Syafawi" />
          <Card hukum="ghunnah" title="Ghunnah" />
          <Card hukum="idghamBighunnah" title="Idgham Bighunnah" />
          <Card hukum="idghamBilaghunnah" title="Idgham Bilaghunnah" />
          <Card hukum="iqlab" title="Iqlab" />
          <Card hukum="qalqalah" title="Qalqalah" />
        </div>
      </div>
    );
}

export default Menu3;