import React, { useState } from 'react';

const AddProduct = () => {
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

  const handleReset = () => {
    setInfo({
      name: '',
      price: '',
      desc: '',
      freeShipping: false,
    });
  };

  const handleAdd = e => {
    alert('상품 등록이 완료되었습니다.');
    handleReset();
    const savedData = JSON.parse(localStorage.getItem('products'));
    if (savedData !== null) localStorage.setItem('products', JSON.stringify([...savedData, info]));
    else localStorage.setItem('products', JSON.stringify([info]));
  };

  const onImgChange = () => {};

  return (
    <section>
      <h2>상품 등록</h2>
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
        <div onClick={handleReset} className="reset-button">
          초기화
        </div>
        <div onClick={handleAdd} className="add-button">
          추가
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
