import React from 'react';


function ProductShow ({product, onBackClick = () => {}}) {
  const {
    id = '', title = '', description = '', created_on = ''
  } = product;

  return (
    <div className="ProductShow">
      <a
        onClick={onBackClick}
        href="#">{'<<<'}</a>
      <h1>{title}</h1>
      <p>{description}</p>
      <p><strong>Created:</strong> {created_on}</p>
    </div>
  )
}

export default ProductShow;
