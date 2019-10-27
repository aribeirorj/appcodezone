import React from 'react';
import Slider from '../../components/Slider';
import {
  Container,
  Header,
  MainContent,
  Nav,
  Article,
  Footer,
  Item,
  Item1,
  Item2,
  ArticleRow,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <MainContent>
        <Nav>
          <Slider />
          <Item />
        </Nav>
        <Article>
          <ArticleRow>
            <Item />
            <Item />
          </ArticleRow>
          <ArticleRow>
            <Item1 />
          </ArticleRow>
          <ArticleRow>
            <Item2 />
            <Item2 />
            <Item2 />
          </ArticleRow>
        </Article>
      </MainContent>
      <Footer />
    </Container>
  );
}
