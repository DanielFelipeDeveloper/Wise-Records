import styled from 'styled-components';
import { shade } from 'polished';

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(2, 2, 2, 0.9);

    position: fixed;
    top: 0;
    z-index: 1;

    height: 82px;
    max-width: 1100px;
    width: 100%;
    padding: 40px 20px;
  }
`;

export const LinkAndMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #fff;
    display: none;
  }

  @media (max-width: 575px) {
    svg {
      display: block;
      cursor: pointer;
      transition: color 0.2s;
      margin-bottom: 2px;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }

  a img {
    padding-top: 20px;
    width: 100px;
    height: 100px;
    object-fit: cover;

    @media (max-width: 575px) {
      margin-left: 10px;
    }
  }
`;

export const Items = styled.div<{ displayHidden: boolean }>`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid transparent;
    transition: 0.4s;
  }

  ul li a,
  ul li button,
  svg {
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    margin: 10px 12px;
  }

  ul li button {
    background: 0;
    border: 0;
  }

  ul li svg {
    font-size: 21px;
    padding-bottom: 1px;
  }

  ul li:hover {
    border-bottom: 2px solid #6900ff;
  }

  @media (max-width: 575px) {
    ul li {
      display: ${(props) => (props.displayHidden ? 'none' : 'false')};
    }
  }
`;
