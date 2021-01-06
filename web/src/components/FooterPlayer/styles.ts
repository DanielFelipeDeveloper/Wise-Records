import styled from 'styled-components';
import { shade } from 'polished';

export const PlayerTrack = styled.div`
  width: 100%;
  height: 12.5%;
  background: #0d0d0d;
  border-top: 1px solid #222;

  position: fixed;
  bottom: 0;
  right: 0;

  padding: 16px 20px;

  display: flex;
  align-items: center;
`;

export const TrackInfo = styled.div`
  display: flex;
  align-items: center;

  width: 291px;

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
`;

export const Link = styled.a<{ color: string }>`
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.color};
`;

export const PlayerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 58%;

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
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;

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

    margin: 20px;

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
`;
