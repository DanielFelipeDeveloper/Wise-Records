import styled from 'styled-components';
import { shade } from 'polished';

export const PlayerContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;

  padding: 0.3125rem 1.25rem 1.25rem;
  width: 100%;
  height: 100%;
  min-height: 6.875rem;
  max-height: 6.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-top: 1px solid #222;
  background: #0d0d0d;

  @media (min-width: 900px) {
    padding: 1rem 1.25rem 1.25rem;
    min-height: 5.9375rem;
    max-height: 5.9375rem;
  }

  .progress-wrapper.mobile {
    display: none;

    @media (max-width: 900px) {
      display: flex;
      margin-bottom: 0.625rem;
    }
  }

  .progress-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    span {
      color: #ababab;
      font-size: 0.8125rem;
      font-weight: 400;
    }

    .slider {
      flex: 1;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const PlayerContent = styled.div`
  margin-top: 0,625rem;
  width: 100%;

  .player-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .track-info {
    margin-top: 0,3125rem;
    width: auto;
    display: flex;
    align-items: center;

    .img-and-description {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 3.75rem;
        height: 3.75rem;
        object-fit: cover;
        border-radius: 0.3125rem;
        margin-right: 0.625rem;
      }

      span {
        color: #c1b9ff;
        font-size: 0.875rem;
        font-weight: 600;
      }

      p {
        color: #6900ff;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 0.9375rem;

        @media (max-width: 900px) {
          display: none;
        }
      }
    }

    @media (min-width: 900px) {
      min-width: 20%;

      .img-and-description img {
        width: 3.8125rem;
      }
    }
  }

  .player-controls {
    .players {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      button {
        background: none;
        border: 0;

        &:disabled {
          cursor: default;
          opacity: 0.5;
        }
      }

      svg {
        margin: 5px;
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

      span button {
        width: 0;
        height: 0;
        border: 0;
      }
      span svg {
        cursor: pointer;
        position: absolute;
        top: 12%;
        left: 14%;
        color: #fff;
        transition: 0.2s;
        &:hover {
          color: ${shade(0.1, '#fff')};
        }
      }
    }

    p {
      display: none;
      color: #6900ff;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.9375rem;

      @media (max-width: 900px) {
        position: absolute;
        min-width: 119.85px;
        display: flex;
        text-align: center;
        justify-content: center;
        margin: 0 auto;
        top: 16.5%;
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

      height: 2.05rem;

      padding-right: 1.125rem;
      padding-left: 0.375rem;

      border-radius: 0.1875rem;

      background: #6900ff;

      margin: 0.625rem;

      transition: 0.2s;

      &:hover {
        background-color: ${shade(0.3, '#6900ff')};
      }
    }

    a span {
      color: #fff;
      font-size: 0.75rem;
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

export const Empty = styled.div`
  display: inline-block;
`;
