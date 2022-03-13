import React, { useState, useEffect } from 'react';
import ConfirmModal from 'components/confirmModal';

import { useNavigate, useParams } from 'react-router-dom';

const ModifyProduct = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [list, setList] = useState([]);
  const [info, setInfo] = useState({
    name: '',
    price: '',
    desc: '',
    freeShipping: false,
  });

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const onChangeName = e => {
    setInfo({ ...info, name: e.target.value });
  };

  const onChangePrice = e => {
    setInfo({ ...info, price: e.target.value });
  };

  const onChangeDesc = e => {
    setInfo({ ...info, desc: e.target.value });
  };

  const onChangeShipping = e => {
    setInfo({ ...info, freeShipping: e.target.checked });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleModify = e => {
    if (!info.name) {
      alert('상품명을 입력해주세요.');
      return;
    } else if (!info.price) {
      alert('가격을 입력해주세요.');
      return;
    }
    setIsOpenModal(false);
    let arr = list;
    arr.splice(params.idx, 1, info);
    setList(arr);
    localStorage.setItem('products', JSON.stringify(arr));
    handleCancel();
  };

  useEffect(() => {
    if (localStorage.getItem('products')) setList(JSON.parse(localStorage.getItem('products')));
  }, []);

  useEffect(() => {
    if (list.length > 0) setInfo(list[params.idx]);
  }, [list, params]);

  return (
    <section>
      <h2>상품 수정</h2>
      <section>
        <div className="input-control">
          <label>상품명</label>
          <input type="text" value={info.name} onChange={onChangeName} />
        </div>
        <div className="input-control">
          <label>가격</label>
          <input type="number" value={info.price} onChange={onChangePrice} />
        </div>
        <div className="input-control">
          <label>상품 설명</label>
          <input type="text" value={info.desc} onChange={onChangeDesc} />
        </div>
        <div className="input-control">
          <label>무료배송</label>
          <input type="checkbox" checked={info.freeShipping} onChange={onChangeShipping} />
        </div>
      </section>
      <div className="button-area">
        <div onClick={handleCancel} className="reset-button">
          취소
        </div>
        <div onClick={openModal} className="add-button">
          수정
        </div>
      </div>
      {isOpenModal && (
        <ConfirmModal
          closeModal={closeModal}
          isOpenModal={isOpenModal}
          modifyProduct={handleModify}
          type="modify"
        />
      )}
    </section>
  );
};

export default ModifyProduct;
