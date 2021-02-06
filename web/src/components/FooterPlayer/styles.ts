import styled from 'styled-components';
import { shade } from 'polished';

export const PlayerContainer = styled.div`
  position: relative;
  position: fixed;
  left: 0;
  bottom: 0;

  padding: 10px 20px 10px;
  width: 100%;
  min-height: 110px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-top: 1px solid #222;
  background: #0d0d0d;

  .progress-wrapper {
    margin-bottom: 10px;
    width: 100%;
    display: flex;

    span {
      color: #ababab;
      font-size: 13px;
      font-weight: 400;
    }

    input[type='range'] {
      width: 100%;
      margin: 0 15px;
    }
  }
`;

export const Player = styled.div`
  margin-top: 10px;
  width: 100%;

  .player-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .track-info {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 40px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 10px;
      }

      span {
        color: #c1b9ff;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
      }

      p {
        color: #6900ff;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 15px;

        position: absolute;
        left: 47.6%;
        bottom: 57px;
        transform: translateX(-50%);
        max-width: 100%;

        @media (max-width: 350px) {
          width: 100%;
          left: 77%;
        }
      }
    }
  }

  .player-controls {
    .players {
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
    }
  }

  .footer-right {
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
    }
  }
`;
