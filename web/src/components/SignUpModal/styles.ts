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
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  position: relative;
  top: 59px;

  max-width: 500px;
  margin: 0 auto;
  background: #000;
  padding: 1.5rem 2.5rem;

  border-radius: 5px;

  color: #fff;

  h1 {
    font-size: 26px;
    text-align: center;

    padding: 15px 0px 30px;

    font-weight: 900;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    margin: 24px 0px;
    text-align: center;
  }

  p.terms {
    margin: 0px 0px 10px;
    text-align: left;
    color: #d9d9d9;
    font-size: 14px;
  }

  p.terms a {
    margin-left: 5px;
    color: #815cff;
    text-decoration: none;
  }

  input {
    width: 100%;
    background: rgb(29, 29, 29);
    border: 1px solid #000;
    margin: 10px auto 10px auto;
    border-radius: 3px;
    outline: none;

    height: 55px;

    padding: 8px 16px;

    color: #fff;

    font-size: 16px;

    ::-webkit-input-placeholder {
      color: ${shade(0.7, '#fff')};
    }

    :-moz-placeholder {
      /* Firefox 18- */
      color: ${shade(0.7, '#fff')};
    }

    ::-moz-placeholder {
      /* Firefox 19+ */
      color: ${shade(0.7, '#fff')};
    }

    :-ms-input-placeholder {
      color: ${shade(0.7, '#fff')};
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

export const Button = styled.button<{ smallerWidth?: boolean }>`
  width: ${(props) => (props.smallerWidth ? '192px' : '100%')};

  margin: ${(props) =>
    props.smallerWidth ? '0px auto 15px auto' : '10px auto 10px auto'};

  padding: 16px 24px;
  font-size: 18px;
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

  a {
    text-decoration: none;
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

  a + a {
    margin-left: 15px;
  }

  a svg {
    margin-right: 5px;
  }
`;
