import React from 'react';

const Product = props => {
  const { name, desc, price, freeShipping } = props.item;
  const localPrice = parseInt(price).toLocaleString();

  const handleClickDelete = () => {
    props.openModal();
    props.setSelected(props.index);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{localPrice}원</td>
      <td>
        <div>{desc}</div>
      </td>
      {freeShipping ? <td style={{ color: 'red' }}>○</td> : <td></td>}
      <td>
        <div className="table-button-area">
          <div className="modify-button" onClick={handleClickDelete}>
            수정
          </div>
          <div className="delete-button" onClick={handleClickDelete}>
            삭제
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Product;
