import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  min-width: 240px;
  background-color: white;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: #a2cff0;
  box-shadow: 0 0 0 5px white inset;
`;

export const Item = styled.div`
  background-color: yellow;
  min-height: 100px;
  min-width: 50%;
  position: relative;
  color: black;
  box-shadow: 0 0 0 5px white inset;
`;

export const Item1 = styled.div`
  background-color: #a2cff0;
  min-height: 280px;
  min-width: 100%;
  position: relative;
  box-shadow: 0 0 0 5px white inset;
`;

export const Item2 = styled.div`
  background-color: #0099ff;
  min-height: 100px;
  min-width: 32%;
  box-shadow: 0 0 0 0px white inset;
`;

export const MainContent = styled.div`
  min-height: 500px;
  display: -webkit-flex;

  @media (max-width: 2560px) {
    -webkit-flex-flow: row;
    flex-flow: row;
  }

  @media (max-width: 600px) {
    -webkit-flex-flow: column;
    flex-flow: column;
  }
`;

export const Nav = styled.nav`
  -webkit-flex: 1 6 20%;
  flex: 1 6 20%;
  -webkit-order: 1;
  order: 1;
`;

export const Article = styled.article`
  -webkit-flex: 3 1 60%;
  flex: 3 1 60%;
  -webkit-order: 2;
  order: 2;
  justify-content: space-around;
`;

export const ArticleRow = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  box-shadow: 0 0 0 5px white inset;
`;

export const Footer = styled.div`
  background-color: #a2cff0;
  height: 80px;
  width: auto;
  box-shadow: 0 0 0 10px white inset;
`;
