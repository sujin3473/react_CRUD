import React, { useState, useEffect } from 'react';
import Product from './product';
import ConfirmModal from 'components/confirmModal';

const ProductList = () => {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleSetSelected = index => {
    setSelected(index);
  };

  const handleDeleteProduct = () => {
    let arr = list;
    arr.splice(selected, 1);
    setList(arr);
    localStorage.setItem('products', JSON.stringify([...arr]));
  };

  useEffect(() => {
    if (localStorage.getItem('products')) setList(JSON.parse(localStorage.getItem('products')));
  }, []);

  return (
    <section>
      <h2>상품 리스트</h2>
      <section>
        {list.length > 0 ? (
          <table className="product-table">
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>상품 설명</th>
              <th>무료배송</th>
              <th></th>
            </tr>
            {list.map((item, index) => {
              return (
                <Product
                  item={item}
                  key={index}
                  index={index}
                  openModal={openModal}
                  setSelected={handleSetSelected}
                />
              );
            })}
          </table>
        ) : (
          <div className="no-list">
            <p>등록된 상품이 없습니다.</p>
          </div>
        )}
      </section>
      {isOpenModal && (
        <ConfirmModal
          closeModal={closeModal}
          isOpenModal={isOpenModal}
          deleteProduct={handleDeleteProduct}
        />
      )}
    </section>
  );
};

export default ProductList;
