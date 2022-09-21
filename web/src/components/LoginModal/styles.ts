import { shade } from 'polished';
import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  display: block !important;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  overflow-y: initial !important;
`;

export const ModalContainer = styled.div`
  position: relative;
  top: 45px;

  height: auto;
  overflow-y: auto;

  width: 500px;
  margin: 0 auto;
  background: #000;
  padding: 2rem 1.5rem;

  border: 1px solid #191818;

  border-radius: 5px;

  color: #fff;

  h1 {
    font-size: 26px;
    text-align: center;

    padding: 15px 0px 30px 0px;

    font-weight: 900;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
      margin: 24px 0px;
      text-align: center;
    }
  }
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 25px;
  height: 25px;
  overflow: visible;

  border-radius: 50%;

  background: #191818;

  position: absolute;
  top: 10px;
  right: 15px;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: rotate(180deg);
  }
`;

export const CheckBoxesDiv = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    color: #d9d9d9;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    input[type='checkbox'] {
      cursor: pointer;
      width: 19px;
      height: 19px;
      border: 1px solid #514e50;
      border-radius: 4px;
      background-color: #000;
      transition: all 0.2s;
    }

    span {
      margin-left: 10px;
    }
  }

  a {
    text-decoration: none;

    color: #d9d9d9;
    font-size: 16px;
    font-weight: 400;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#d9d9d9')};
    }
  }
`;

export const Button = styled.button<{ smallerWidth?: boolean }>`
  width: ${(props) => (props.smallerWidth ? '192px' : '100%')};

  margin: ${(props) => (props.smallerWidth ? '0px auto 15px auto' : '10px auto 10px auto')};

  padding: 16px 24px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #fff;

  background-color: #6900ff;

  border: 1px solid #5000c2;
  border-radius: 5px;

  transition: 0.4s;

  &:hover {
    background: ${shade(0.2, '#6900ff')};
  }
`;

export const ContentBreakDiv = styled.div`
  position: relative;
  margin: 16px 0;

  text-align: center;

  h2 {
    font-size: 16px;
    color: #d9d9d9;
    font-weight: 300;
    z-index: 1;
  }
`;

export const SocialButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    cursor: pointer;
    color: #d9d9d9;

    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 130px;

    padding: 7px 5px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;

    font-size: 18px;

    transition: 0.3s;

    &:hover {
      color: #fff;
      background-color: #050405;
      border-color: #d4ddd4;
    }
  }

  div + div {
    margin-left: 15px;
  }

  div svg {
    margin-right: 5px;
  }
`;
