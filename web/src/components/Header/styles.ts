import styled from 'styled-components';

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.9);

    position: fixed;
    top: 0;
    z-index: 1;

    height: 82px;
    max-width: 1100px;
    width: 100%;
    padding: 40px 20px;
  }
`;

export const Logo = styled.a`
  font-size: 24px;
  font-family: 'Metal Mania', cursive;
  text-decoration: none;
  color: #fff;
`;

export const Items = styled.div`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid black;
    transition: 0.4s;
  }

  ul li a {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    margin: 10px 12px;
  }

  ul li:hover {
    border-bottom: 2px solid #6900ff;
  }
`;
