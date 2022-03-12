import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const ModifyProduct = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: '',
    price: '',
    desc: '',
    freeShipping: false,
  });

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

  const handleAdd = e => {
    if (!info.name) {
      alert('상품명을 입력해주세요.');
      return;
    } else if (!info.price) {
      alert('가격을 입력해주세요.');
      return;
    }
    alert('상품 수정이 완료되었습니다.');
    const savedData = JSON.parse(localStorage.getItem('products'));
    if (savedData !== null) localStorage.setItem('products', JSON.stringify([...savedData, info]));
    else localStorage.setItem('products', JSON.stringify([info]));
    handleCancel();
  };

  const onImgChange = () => {};

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
        <div className="input-control">
          <label>상품 이미지</label>
          <input type="file" name="image" accept="image/*" onChange={onImgChange} />
        </div>
      </section>
      <div className="button-area">
        <div onClick={handleCancel} className="reset-button">
          취소
        </div>
        <div onClick={handleAdd} className="add-button">
          수정
        </div>
      </div>
    </section>
  );
};

export default ModifyProduct;
