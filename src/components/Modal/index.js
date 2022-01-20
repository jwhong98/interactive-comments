import React from "react";
import ReactDOM from "react-dom";
import {
  Backdrop,
  Overlay,
  Confirmation,
  Message,
  ButtonWrap,
  Cancel,
  Delete,
} from "./ModalElements,";

const Modal = () => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop>
          <Overlay>
            <Confirmation>Delete comment</Confirmation>
            <Message>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </Message>
            <ButtonWrap>
              <Cancel>no, cancel</Cancel>
              <Delete>yes, delete</Delete>
            </ButtonWrap>
          </Overlay>
        </Backdrop>,
        portalElement
      )}
    </>
  );
};

export default Modal;
