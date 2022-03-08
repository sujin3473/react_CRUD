import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleAdd = (e) => {
    const data = { price, desc };
    console.log(data);
    localStorage.setItem(name, JSON.stringify(data));
  };

  const onImgChange = () => {};

  return (
    <>
      <h2>상품 등록</h2>
      <div className="form-control">
        <label>상품명</label>
        <input type="text" name="name" onChange={onChangeName} />
      </div>
      <div className="form-control">
        <label>가격</label>
        <input type="text" name="price" onChange={onChangePrice} />
      </div>
      <div className="form-control">
        <label>상품 설명</label>
        <input type="text" name="description" onChange={onChangeDesc} />
      </div>
      <div className="form-control">
        <label>상품 이미지</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={onImgChange}
        />
      </div>
      <button onClick={handleAdd}>추가</button>
    </>
  );
};

export default AddProduct;
