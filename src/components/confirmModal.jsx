import React from 'react';

const ConfirmModal = props => {
  const handleClickCancel = () => {
    props.closeModal();
  };

  const handleDeleteProduct = () => {
    props.deleteProduct();
    props.closeModal();
  };

  return (
    <>
      <div className="dim" style={{ display: props.isOpenModal ? 'block' : 'none' }}></div>
      <section className="confirm-modal">
        <img src="/img/modal_close_btn.png" className="close-button" onClick={handleClickCancel} />
        <p className="modal-text">상품을 삭제하시겠습니까?</p>
        <div className="button-area">
          <div className="cancel-button" onClick={handleClickCancel}>
            취소
          </div>
          <div className="confirm-button" onClick={handleDeleteProduct}>
            확인
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmModal;
