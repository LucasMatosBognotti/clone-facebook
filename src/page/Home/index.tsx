import React from 'react';
import { StatusBar, ScrollView } from 'react-native';

import AppBar from '../../components/AppBar';
import Feed from '../../components/Feed';
import Story from '../../components/Story';
import TollBar from '../../components/ToolBar';
import Users from '../../components/Users';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Container>
        <ScrollView>
          <AppBar />
          <TollBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;
