import styled from "styled-components";
import cancel from "../assets/images/cancel.svg";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalSection>
      <ModalContent>
        <h2>Coming soon!</h2>
        <button onClick={onClose}>
          <img src={cancel} alt="" />
        </button>
      </ModalContent>
    </ModalSection>
  );
};

export default Modal;

const ModalSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px 60px;
  border-radius: 5px;
  position: relative;
  button {
    border: none;
    outline: none;
    background: var(--text-primary);
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 16px;
    color: var(--text-secondary);
    cursor: pointer;
    position: absolute;
    top: 3px;
    right: 3px;
    img {
      width: 16px;
    }
  }
`;
