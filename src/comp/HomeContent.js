import React from 'react';

const HomeContent = ({title}) => {
  return (
      <div className="content pop">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="isi"></div>
      </div>
    );
}

export default HomeContent;