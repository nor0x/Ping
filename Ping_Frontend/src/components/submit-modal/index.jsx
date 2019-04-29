import React from "react";

export const SubmitModal = ({ isCloseModal, setModalState }) => {
  const modalClassName = isCloseModal ? "modal is-active" : "modal";

  const handleClick = () => {
    setModalState(false)
  };

  return (
    <div className={modalClassName}>
      <div className="modal-background" />
      <div className="modal-content">
        <input type="text" />
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleClick}
      />
    </div>
  );
};
