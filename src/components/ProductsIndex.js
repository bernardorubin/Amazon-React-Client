import React from 'react';

function ProductsIndex (props) {
const handleClick = id => event => {
  props.onProductClick(id);
};

return (
  <ul className="ProductsIndex">
  {
    props.products.map(
      q => (

        <li
          onClick={handleClick(q.id)}
          key={q.id}>
          {q.title}
        </li>
        )
      )
    }
    </ul>
  )
};

export default ProductsIndex;
