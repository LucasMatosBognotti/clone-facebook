import React from 'react';
import { ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Avatar from '../Avatar';

import { Container, Card, CardStory, CardUser, CardFooter, Text, BottomDivider } from './styles';

const Story: React.FC = () => {
  return (
    <>
      <Container>
        <ScrollView horizontal showsVerticalScrollIndicator={false} style={{ paddingLeft: 11 }} >
          
          <Card>
            <CardStory source={require('../../../assets/computer.jpg')} />
            <CardUser>
              <AntDesign name="plus" size={24} color="#1777f2" />
            </CardUser>
            <CardFooter>
              <Text>Add to Story</Text>
            </CardFooter>
          </Card>

          <Card>
            <CardStory source={require('../../../assets/gravity.jpg')} />
            <CardUser>
              <Avatar source={require('../../../assets/Lucas.jpg')} story={true} />
            </CardUser>
            <CardFooter>
              <Text>Lucas M</Text>
            </CardFooter>
          </Card>

        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Story;
