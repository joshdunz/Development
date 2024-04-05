import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;

  return (
    <div className="card">
      <div className="content-block">
        <img className="small" src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <h4>{product.brand}</h4>
        <h5>${product.price}</h5>
        <div className="scent-notes">
          {product.scentNotes.map((note, index) => (
            <div key={index} className="scent-note">{note}</div>
          ))}
        </div>
        <div>
          <button onClick={() => onAdd(product)}> Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
