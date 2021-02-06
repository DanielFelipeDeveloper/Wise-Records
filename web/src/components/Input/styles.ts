import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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
`;
