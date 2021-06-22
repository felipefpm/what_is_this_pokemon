import React from 'react';
import ContentBody from '../../Components/ContentBody';
import ContentInputs from '../../Components/ContentInputs';
import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContentInputs />
        <ContentBody />
      </Content>
    </Container>
  );
};

export default Home;
