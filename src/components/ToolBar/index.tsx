import React from 'react';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from '../Avatar';

import { Container, Row, Input, Divider, Menu, MenuText, Separator, BottomDivider } from './styles';

const ToolBar: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Avatar source={require('../../../assets/Lucas.jpg')} />
          <Input placeholder="What´s on your mind ?" />
        </Row>

        <Divider />
        
        <Row>
          <Menu>
            <Ionicons name="ios-videocam" size={22} color="#FF3337" />
            <MenuText>Live</MenuText>
          </Menu>

          <Separator />

          <Menu>
            <MaterialIcons name="photo-size-select-actual" size={20} color="#4CAF50" />
            <MenuText>Photo</MenuText>
          </Menu>

          <Separator />

          <Menu>
            <MaterialCommunityIcons name="video-plus" size={22} color="#e141fc" />
            <MenuText>Room</MenuText>
          </Menu>

        </Row>
      </Container>
      <BottomDivider />
    </>
  );
};

export default ToolBar;
