import React from 'react';

const ConfirmModal = props => {
  const handleClickCloseBtn = () => {
    props.closeModal();
  };

  return (
    <>
      <div className="confirm-modal">
        <img
          src="/img/modal_close_btn.png"
          className="close-button"
          onClick={handleClickCloseBtn}
        />
      </div>
      <div className="dim" style={{ display: props.isOpenModal ? 'block' : 'none' }}></div>
    </>
  );
};

export default ConfirmModal;
