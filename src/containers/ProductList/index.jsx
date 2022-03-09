import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [list, setList] = useState([]);

  return (
    <section>
      <h2>상품 리스트</h2>
      <section>
        {list.length > 0 ? (
          <>
            {list.map(() => {
              return <></>;
            })}
          </>
        ) : (
          <>
            <p>등록된 상품이 없습니다.</p>
          </>
        )}
      </section>
    </section>
  );
};

export default ProductList;
