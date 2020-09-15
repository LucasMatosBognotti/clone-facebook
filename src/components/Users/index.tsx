import React from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from '../Avatar';

import { Container, Room, Text, User, BottomDivider } from './styles';

const Users: React.FC = () => {
  return (
    <>
      <Container>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 11 }} >
          <Room>
            <MaterialCommunityIcons name="video-plus" size={26} color="#e141fc" />
            <Text>Create Room</Text>
          </Room>
          <User>
            <Avatar source={require('../../../assets/time.jpg')} online={true} />
          </User>
          <User>
            <Avatar source={require('../../../assets/time.jpg')} online={true} />
          </User>
          <User>
            <Avatar source={require('../../../assets/time.jpg')} online={true} />
          </User>
          <User>
            <Avatar source={require('../../../assets/time.jpg')} />
          </User>
          <User>
            <Avatar source={require('../../../assets/time.jpg')} />
          </User>
        </ScrollView>
      </Container>
    </>
  );
};

export default Users;
