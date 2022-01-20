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

const Modal = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose}>
          <Overlay>
            <Confirmation>Delete comment</Confirmation>
            <Message>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </Message>
            <ButtonWrap>
              <Cancel onClick={props.onClose}>no, cancel</Cancel>
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
