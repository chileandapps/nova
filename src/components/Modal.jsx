import React from "react";
import styled from "styled-components";
import { modalInitialState } from "./../store/initialState";
import { CSSTransition } from "react-transition-group"; // ES6

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & .modal-wrapper {
    position: relative;
    /* height: 120px; */
    padding: 40px;
    background: rgba(0, 0, 0, 0.9);
    /* border: 1px solid red; */
    color: #000;
    z-index: 9;
    display:flex;
    justify-content: center;

    & .example-enter {
      opacity: 0.01;
    }

    & .example-enter.example-enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }

    & .example-leave {
      opacity: 1;
    }

    & .example-leave.example-leave-active {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
    }
  }

  & .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: white;
  }
`;
const Modal = ({ modal, setModal }) => {
  const close = () => {
    setModal(modalInitialState);
  };
  return (
    <>
      {modal.visible ? (
        <ModalContainer onClick={close}>
          <div className="modal-wrapper">
            {/* <CSSTransition in={true} timeout={200} classNames="example"> */}
              <div className="modal-content">
                {/* <h3>You can track your transaction below: </h3> */}
                <h3>{modal.title}</h3>
                <p>{modal.text}</p>
              </div>
            {/* </CSSTransition> */}
          </div>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
