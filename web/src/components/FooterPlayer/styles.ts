import styled from 'styled-components';
import { shade } from 'polished';

export const PlayerContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 12vh;

  background: #0d0d0d;

  border-top: 1px solid #222;

  @media (max-width: 900px) {
    height: 14vh;
  }
`;

export const PlayerTrack = styled.div`
  position: absolute;
  min-width: 100%;
  padding: 12px 20px;
  background: #0d0d0d;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: space-between;
    height: 12.5%;
    padding: 32px 16px;

    top: 38px;
  }
`;

export const TrackInfo = styled.div`
  display: flex;
  align-items: center;

  min-width: 15%;

  img {
    width: 61px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    height: 40px;

    img {
      width: 40px;
    }
  }
`;

export const Link = styled.a<{ color: string }>`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.color};

  @media (max-width: 900px) {
    display: ${(props) => (props.color === '#6900ff' ? 'none' : 'block')};
  }
`;

export const PlayerControls = styled.div`
  display: flex;

  svg {
    margin: 5px;
    cursor: pointer;
    color: #fff;
    transition: 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  span {
    cursor: pointer;
    border: 2px solid #6900ff;
    border-radius: 50%;
    width: 39.85px;
    height: 39.85px;
    position: relative;
    transition: 0.2s;

    &:hover {
      border-color: ${shade(0.1, '#6900ff')};
    }
  }

  span svg {
    cursor: pointer;
    position: absolute;
    top: 12%;
    left: 16%;

    color: #fff;
    transition: 0.2s;

    &:hover {
      color: ${shade(0.1, '#fff')};
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    min-width: 50%;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 70%;

  span {
    color: #ababab;
    font-size: 13px;
    font-weight: 400;
  }

  input[type='range'] {
    cursor: pointer;
    width: 100%;
    margin: 10px;
  }

  @media (max-width: 900px) {
    position: absolute;
    top: -30px;
    max-width: 100%;
    min-width: 93%;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 32.8px;

    padding-right: 18px;
    padding-left: 6px;

    border-radius: 3px;

    background: #6900ff;

    margin: 10px;

    transition: 0.2s;

    &:hover {
      background-color: ${shade(0.3, '#6900ff')};
    }
  }

  a span {
    color: #fff;
    font-size: 12px;
  }

  svg {
    cursor: pointer;
    margin: 10px;
  }

  div {
    width: 100%;
    align-items: right;
  }

  @media (max-width: 900px) {
    .sound {
      display: none;
    }

    .options {
      margin-right: 30px;
    }
  }

  @media (max-width: 465px) {
    a {
      margin-left: -15px;
    }
  }
`;
