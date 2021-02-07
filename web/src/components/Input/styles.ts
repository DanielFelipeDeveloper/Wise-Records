import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  inputNoFilled: boolean;
}

export const Content = styled.div`
  span {
    font-size: 13px;
    color: #ff007a;
    font-weight: 800;
    display: flex;
    margin: -5px auto;
  }

  & + div {
    margin-bottom: 5px;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background: rgb(29, 29, 29);
  border: 1px solid #000;
  margin: 10px auto 10px auto;
  border-radius: 3px;
  outline: none;

  height: 55px;

  padding: 8px 16px;

  color: #fff;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;

    font-size: 16px;

    &::placeholder {
      color: ${shade(0.7, '#fff')};
    }
  }

  svg {
    margin-right: 16px;
    color: ${shade(0.7, '#fff')};
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #6900ff;

      svg {
        color: #6900ff;
      }
    `}

  ${(props) =>
    props.inputNoFilled &&
    css`
      border-color: #ff007a;

      svg {
        color: #ff007a;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #6900ff;

      svg {
        color: #6900ff;
      }
    `}
`;
