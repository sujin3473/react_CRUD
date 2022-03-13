import React, { useState, useEffect } from 'react';

const ConfirmModal = props => {
  const [type, setType] = useState();

  const handleClickCancel = () => {
    props.closeModal();
  };

  const handleClickConfirm = () => {
    if (props.type === 'delete') {
      props.deleteProduct();
    } else if (props.type === 'modify') {
      props.modifyProduct();
    }
    props.closeModal();
  };

  useEffect(() => {
    if (props.type === 'delete') {
      setType('삭제');
    } else if (props.type === 'modify') {
      setType('수정');
    }
  }, []);

  return (
    <>
      <div className="dim" style={{ display: props.isOpenModal ? 'block' : 'none' }}></div>
      <section className="confirm-modal">
        <img src="/img/modal_close_btn.png" className="close-button" onClick={handleClickCancel} />
        <p className="modal-text">상품을 {type}하시겠습니까?</p>
        <div className="button-area">
          <div className="cancel-button" onClick={handleClickCancel}>
            취소
          </div>
          <div className="confirm-button" onClick={handleClickConfirm}>
            확인
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmModal;
