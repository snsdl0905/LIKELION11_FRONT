import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ContainImage = styled.div`
    width: 150px;
    margin: 0 auto;
`

const Detail = ({ image, name, number, address, onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <ContainImage><img style={{ maxWidth:"100%", objectFit: "contain"}} src={image}/></ContainImage>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>Address: {address}</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Detail;