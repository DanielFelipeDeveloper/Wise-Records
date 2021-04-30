import { shade } from 'polished';
import styled from 'styled-components';

export const Cards = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 25px auto 100px auto;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  max-width: 1050px;
  margin: 100px auto 0 auto;
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #202020;
  h2 {
    font-size: 45px;
    font-family: 'Metal Mania', cursive;
    font-weight: 400;
    color: #fff;
  }
`;

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
