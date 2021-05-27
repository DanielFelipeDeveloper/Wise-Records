import { shade } from 'polished';
import styled from 'styled-components';

export const DivCard = styled.div`
  position: relative;
  width: 240px;
  margin: 10px;
`;

export const CardImage = styled.div`
  position: relative;
  height: 240px;
  width: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const BtnPlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 900px) {
    opacity: 1;
  }

  button svg {
    margin-left: 4%;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 38%;
    left: 38%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #00000080;
    border: 3px solid #fff;
    outline: 0;

    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Description = styled.div`
  width: 240px;
  display: flex;
  padding: 2px 4px;
  text-align: left;

  border-radius: 4px;

  justify-content: space-between;
  margin-top: 8px;

  span {
    color: #fff;
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
  }

  p {
    color: #9f9f9f;
    font-size: 13px;
    line-height: 23px;
    font-weight: 400;
  }

  button {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 4px 8px;
    margin-top: calc(33% - 5px);

    background: #6900ff;
    border: 0;
    border-radius: 4px;

    transition: 0.2s;

    &:hover {
      background-color: ${shade(0.3, '#6900ff')};
    }

    span {
      margin-left: 8px;
      font-size: 14px;
    }
  }
`;
