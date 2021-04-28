import React from 'react';

const Card = ({ hukum,title }) => {
  return (
    <div className="card">
      <div className={"cardTitle " + hukum}>{title}</div>
      <h4>Testi</h4>
    </div>
    )
}

export default Card;