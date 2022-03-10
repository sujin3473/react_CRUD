import React, { useState, useEffect } from 'react';
import Product from './product';
import ConfirmModal from 'components/confirmModal';

const ProductList = () => {
  const [list, setList] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem('products')));
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
              return <Product item={item} key={index} openModal={openModal} />;
            })}
          </table>
        ) : (
          <>
            <p>등록된 상품이 없습니다.</p>
          </>
        )}
      </section>
      {isOpenModal && <ConfirmModal closeModal={closeModal} isOpenModal={isOpenModal} />}
    </section>
  );
};

export default ProductList;
