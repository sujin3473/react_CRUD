import React from 'react';

const Product = props => {
  const { name, desc, price, freeShipping } = props.item;
  const handleClickDelete = () => {
    props.openModal();
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{desc}</td>
      {freeShipping ? <td style={{ color: 'red' }}>○</td> : <td></td>}
      <td>
        <div className="delete-button" onClick={handleClickDelete}>
          삭제
        </div>
      </td>
    </tr>
  );
};

export default Product;
